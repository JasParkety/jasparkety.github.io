
(function($) {
    $(document).ready(function(){
        $('a[href^="#"]').click(function() {
            var target = $(this.hash);
            if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
            if (target.length == 0) target = $('html');
            if($(window).width() < 1000) {
              $('html, body').animate({ scrollTop: target.offset().top - (70) }, 1000);
            }
            else {
              $('html, body').animate({ scrollTop: target.offset().top - (13) }, 1000);
            }
        });
    });
})(jQuery);
