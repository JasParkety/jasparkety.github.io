
## Search for a specific String in multiple files without telling the file extension

```bash
grep -rnw 'qitasc.github.io/' -e 'manual-bg'
```

## Search for specific String in multiple files of one type (or several types)

```bash
find . -regex ".*\.py" | sed 's/ /\\ /g' | xargs grep -i "parent"
```


#!/bin/bash

#############################################
# Checks the webpage and remove temp files  #
#############################################

wget --spider -r --no-check-certificate -nv --output-file='404.log' https://docs.qitasc.com
rm -rf docs.qitasc.com

#############################################
# Gets the total number of broken Links     #
#############################################

numberOfLinks=$( grep 'broken' 404.log | sed 's/[^0-9]*//g')
displayNumber=$(($numberOfLinks + 1))



#############################################
# Displays total number of broken Links     #
#############################################
grep -A $displayNumber 'broken links' 404.log

for i in $(seq 1 $numberOfLinks);
do
      printf "\nFound a broken Link:\n"
      j=$((i + 1))
      # get the wanted lines to display out of the file 404.log, but removes first the 24 characters https://docs.qitasc.com
      keyWord=$(grep 'broken links' 404.log -A$j | tail -n 1 | sed 's/^.\{24\}//');
      keyWord="../${keyWord}"
      printf "Broken Link ====> $keyWord <==== found in the following files: \n"
      # Finds the keyword in the manual repository but excludes the files 404.log and the folder intact-handbook
      find . -type f -print | sed 's/ /\\ /g' | xargs grep -i "$keyWord" | awk '(!/intact-handbook/) && (!/404/)' | grep -v 'Binary file'
      printf "\n"
done
~                                                                                                                                                                                                           
~                                                                                                                                                                                                           
echo Remove Files from the docs folder
# This step deletes files listed in the file manual/intact-handbook/automation/configuration/ignoredFiles.txt
# The files may be needed to be part of the repository but should not be served by mkdocs
declare -a listOfFiles
STR="intact-handbook/docs/"
mapfile -t listOfFiles < intact-handbook/automation/configuration/ignoredFiles.txt
# Bash resolves this eventually to a command $STR$line so use "${STR}$line" instead
# If STR e.g. is / and line is * it deletes the whole root
# Also take care of `Backticks`, bash interpretates all strings within Backticks as a command
while IFS= read -r line; do rm -rf "${STR}$line"; done < intact-handbook/automation/configuration/ignoredFiles.txt


#!/usr/bin/env python3

import fileinput, os, fnmatch, re, sys
from unittest import TestCase

listMatch = ['/AppTest/', 'IntactClient', 'tutorials', 'client', '/intact/', '/appendix/', '/builtins/', '/configuration/', '/installation/', '/intactbasics/', '/intactsteps/', '/qlass/', '/reports/', '/verification/', '/manual_content_common/', '/rules/', '/studio/', 'GettingStarted', '/conqlude/']
folderMatch = ['/features/', '/basics/', '/installer/', '/testcaseexecution/']


class RuleSet:

    # Changes the index to README if html in line, /index.html to /README
    @staticmethod
    def index_rpl(line):

        ptn_index = re.compile('(?<=/)index.html')

        if ".html" in line:
            line = re.sub(ptn_index, 'README', line)
        return line

    # Searching for Links [<arbitrary Text>](../<path text>.html) changes to [<arbitrary Text>](../../<path text>.html)
    @staticmethod
    def relative_rpl(line):

        ptn_dblperiod = re.compile('(?<=\]\()\.\./(?=\w+)')

        if ".html" in line and "../" in line:
            line = re.sub(ptn_dblperiod, '../../', line)
        return line

    # Internal Links must not have an .html tag included
    @staticmethod
    def internal_html_rpl(line):

        ptn_html = re.compile('(\.html)(?<=\w)')

        if ".html" and any(word in line for word in listMatch):
            line = re.sub(ptn_html, '', line)
        return line

    # Replace Studio Links
    @staticmethod
    def studio_rpl(line):

        ptn_studio = re.compile('(?<=\w\])\(..\/(?=\w+\/)')
        ptn_html = re.compile('(\.html)(?<=\w)')

        if ".html" in line and any(word in line for word in folderMatch):
            line = re.sub(ptn_studio, '(/studio/', line)
            line = re.sub(ptn_html, '', line)
        return line

    # Replace Intact_Tutorials to tutorials
    @staticmethod
    def tutorials_rpl(line):

        ptn_tutorials = re.compile('(\/Intact_Tutorials)')
        ptn_html = re.compile('(\.html)(?<=\w)')

        if ".html" in line and "../Intact_Tutorials/" in line:
            line = re.sub(ptn_tutorials, '' , line)
            line = re.sub(ptn_html, '', line)
        return line

    # Remove Prepending Intact_manual character sequence on installation
    @staticmethod
    def installation_rpl(line):

        ptn_installation = re.compile('\/Intact_manual\/installation\/installation')

        if "/Intact_manual/installation/installation" in line:
            line = re.sub(ptn_installation, '/installation/installation', line)
        return line

    # Remove Prepending Intact_manual character sequence on qlass
    @staticmethod
    def qlass_rpl(line):

        ptn_qlass = re.compile('(\/Intact_manual\/qlass\/introduction)')

        if "/Intact_manual/qlass/introduction" in line:
            line = re.sub(ptn_qlass, "/qlass/introduction", line)
        return line


class findClass:

    @staticmethod
    def findReplace(directory, filePattern):
        for path, dirs, files in os.walk(os.path.abspath(directory)):
            for filename in fnmatch.filter(files, filePattern):
                filepath = os.path.join(path, filename)
                for line in fileinput.input(filepath, inplace=True):
                    if line.strip():
                        changed_line = RuleSet.index_rpl(line)
                        changed_line = RuleSet.relative_rpl(changed_line)
                        changed_line = RuleSet.internal_html_rpl(changed_line)
                        changed_line = RuleSet.studio_rpl(changed_line)
                        changed_line = RuleSet.tutorials_rpl(changed_line)
                        changed_line = RuleSet.installation_rpl(changed_line)
                        changed_line = RuleSet.qlass_rpl(changed_line)
                        # We dont want new lines if line was empty or filled with whitespaces
                        if len(line.strip()) == 0 :
                            print(changed_line)
                        else:
                            sys.stdout.write(changed_line)
                    else:
                        print(line, end='')

                print("Successfully changed", filename)


if __name__ == '__main__':
    findClass.findReplace("docs", "*.md")


class MyTest(TestCase):

    def test_index_rpl(self):
        self.assertEqual(RuleSet.index_rpl("/index.html"), "/README")

    def test_relative_rpl(self):
        self.assertEqual(RuleSet.relative_rpl("[Apptests](../intactsteps/apptests.html)"), "[Apptests](../../intactsteps/apptests.html)")

    def test_html_rpl(self):
        for word in listMatch:
            self.assertEqual(RuleSet.internal_html_rpl("[Apptests](../" + word + "/apptests.html)"), "[Apptests](../" + word + "/apptests)")

    def test_studio_rpl(self):
        for word in folderMatch:
            self.assertEqual(RuleSet.studio_rpl("[Apptests](.." + word + "apptests.html)"), "[Apptests](/studio" + word + "apptests)")

    def test_tutorials_rpl(self):
        self.assertEqual(RuleSet.tutorials_rpl("[Apptests](../Intact_Tutorials/apptests.html)"), "[Apptests](../apptests)")

    def test_installation_rpl(self):
        self.assertEqual(RuleSet.installation_rpl("[Apptests](../Intact_manual/installation/installation"), "[Apptests](../installation/installation")

    def test_qlass_rpl(self):
        self.assertEqual(RuleSet.qlass_rpl("[Apptests](../Intact_manual/qlass/introduction)"), "[Apptests](../qlass/introduction)" )                                                                                                                                                                                                        
~                   







#!/usr/bin/env python3

import fileinput, os, os.path, fnmatch, re
import youtrack.connection

allRelNumbersArray = []
allLinesHeaderArray = []
allLinesNavArray = []

class YoutrackRelease(object):
    @staticmethod
    def getYTTickets(url="https://youtrack.qvie.qitasc.com"):
        url="https://youtrack.qvie.qitasc.com"

        if os.path.exists("../configuration/automation.md"):
            print('File automation.md Detected \n')
            with open("../configuration/automation.md", "r") as loginInf:
                login = loginInf.readline().strip()
                pw = loginInf.readline().strip()
        else:
            print('automation.md Missing \n')
            login = "automation"
            pw = os.environ.get('automation_pass')
            print('Environment Variable Detected \n')

        connection = youtrack.connection.Connection(url, login=login, password=pw)
        issues = connection.get_all_issues("project: {REL NOTES} General Notes", 0, 999)
        RelNotes = [i["summary"].replace("General Notes ", "").strip().replace(":", "") for i in issues if "General Notes " in i["summary"]]
        i = 0
        for version in RelNotes:
            if "2018" or "2019" in version:
                allRelNumbersArray.append(version)
                i += 1
        NumberofLines = i
        allRelNumbersArray.sort()
        print("Total Number of Lines:", i, "NumberofLines Var:", NumberofLines, "\n")
        i = 0

        with open("../configuration/RelNumbers.md", "w") as f:
            while i != NumberofLines:
                print("Line Number: ", i, "Version: ", allRelNumbersArray[i], "\n")
                f.write(allRelNumbersArray[i])
                i += 1
        f.close()
        j = 0
        k = 0
        with open("../html/partials/header.html", "r") as headerFile:
            with open("../../material/partials/header.html", "w") as headerMkdocsFile:
                for line in headerFile:
                    allLinesHeaderArray.append(line.replace('[versionPythonPlaceHolder]', allRelNumbersArray[NumberofLines - 1]))
                    j += 1
                while k != j:
                    headerMkdocsFile.write(allLinesHeaderArray[k])
                    k += 1
        j = 0
        k = 0
        with open("../html/partials/nav.html", "r") as navFile:
            with open("../../material/partials/nav.html", "w") as navMkdocsFile:
                for line in navFile:
                    allLinesNavArray.append(line.replace('[versionPythonPlaceHolder]', allRelNumbersArray[NumberofLines - 1]))
                    j += 1
                while k != j:
                    navMkdocsFile.write(allLinesNavArray[k])
                    k += 1

        print('Version Number Implementation with Success \n')
if __name__ == '__main__':
    YoutrackRelease.getYTTickets()
else:
	print ('Imported by Module')




