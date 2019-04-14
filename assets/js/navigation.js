    var condition = 100;

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();

      if ( (scroll > condition) && ($( window ).width() < 1200) ) {

            $(' .firstGradient ').toggleClass('.opacityZero');
            $(' .secondGradient ').css("opacity", "1");
            $(' .SkillDescription ').css("color", "white");
      }
      else if ( (scroll > condition) && ($( window ).width() > 1200) ) {
            $(' .firstGradient ').toggleClass('.opacityZero');
            $(' .secondGradient ').css("opacity", "1");
            $(' .StickyNav ').css("top", "0px");
            $(' .SkillDescription ').css("color", "white");
           }
      else {
            $(' .firstGradient ').toggleClass('.opacityZero');
            $(' .secondGradient ').css("opacity", "0");
            $(' .StickyNav ').css("top", "-100px");
            $(' .SkillDescription ').css("color", "black");

      }
   });

   // Lets get the Slider for Tablet navigation to work

   $("#initiate").on("click",function(){
      $(".slider").toggleClass("hide");
      $(this).toggleClass('active');

   });
   $(".slider").on("click",function(){
     $(".slider").toggleClass("hide");
     $("#initiate").toggleClass("active");

   });

   const rippleElements = document.getElementsByClassName("myRipple");

   for(let i = 0; i < rippleElements.length; i++) {
     rippleElements[i].onclick = function(e){
       let X = e.pageX - this.offsetLeft;
       let Y = e.pageY - this.offsetTop;
       let rippleDiv = document.createElement("div");
       rippleDiv.classList.add('ripple');
       rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
       let customColor = this.getAttribute('ripple-color');
       if (customColor) rippleDiv.style.background = customColor;
       this.appendChild(rippleDiv);
       setTimeout(function(){
         rippleDiv.parentElement.removeChild(rippleDiv);
       }, 900);
     }
   }

window.smoothScroll = function(target) {
   var scrollContainer = target;
   do { //find scroll container
       scrollContainer = scrollContainer.parentNode;
       if (!scrollContainer) return;
       scrollContainer.scrollTop += 1;
   } while (scrollContainer.scrollTop == 0);

   var targetY = 0;
   do { //find the top of target relatively to the container
       if (target == scrollContainer) break;
       if ( $( window ).width() > 1200 ) {targetY += target.offsetTop - 35;}
       else {targetY += target.offsetTop - 60;}

   } while (target = target.offsetParent);

   scroll = function(c, a, b, i) {
       i++; if (i > 30) return;
       c.scrollTop = a + (b - a) / 30 * i;
       setTimeout(function(){ scroll(c, a, b, i); }, 20);
   }
   // start scrolling
   scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
