(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(window).width() > 1550) {
                $('#floating-container').fadeIn(500);
            } else {
                $('#floating-container').fadeOut(500);
          }
        });
    });
    $(window).on('resize', function() {
      if($(window).width() < 1549) {
        $('#floating-container').fadeOut(500);
      }
      else if ($(window).width() > 1550) {
        $('#floating-container').fadeIn(500);
      }
    });
})(jQuery);
//
(function($) {
    $(document).ready(function(){
        var outerHeightVar = $(document).height();
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100 && $(this).scrollTop() < (outerHeightVar - 700) && $(window).width() < 774) {
                $('.lbl-toggle-floating-mobile').fadeIn(100);
             }
           else {
                  $('.lbl-toggle-floating-mobile').fadeOut(100);
           }
        });
        $(window).on('resize', function() {
           if($(window).width() < 774) {
              $('.lbl-toggle-floating-mobile').fadeOut(100);
           }
           else if ($(window).width() < 774 && $(this).scrollTop() > 100) {
            $('.lbl-toggle-floating-mobile').fadeIn(100);
          }
        });
    });
})(jQuery);

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

(function($) {
    $(document).ready(function(){
        $('[id^=toggle-floating-input]').click(function() {
              $('#collapsible-01').prop('checked',false);
        });
    });
})(jQuery);
