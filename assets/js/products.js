
// Lets set a global Var to define the Window Height of the Hero on the Mobile View Here




var setHeroHeight = function() {
  var widthWindow = 768;
  $(document).ready(function() {
    if ($( window ).width() < widthWindow) {
      $(".heroProductsMobile").css('height', '500px');
    }
  });
}

var heroShrinker = function() {
   var widthWindow = 768;
   $(window).scroll(function() {

        var scrollOffset = $(window).scrollTop();

        if (scrollOffset > 170) {
            $('.heroProductsMobile').addClass( 'toggleHeight' );
            $('.LogoImage').addClass( 'toggleMargin' );
            $('.productHeroSecondary').addClass( 'invisibleMe' );
            $('#productsHeroIcon').addClass( 'invisibleMe' );
            $('subHeaderContainer').addClass( 'invisibleMe' );
            if ($(window).width() > 768) {
              $('.heroProductsDesktop').addClass( 'toggleHeight' );
            }



        }
        else {
          if ($(window).width() > 768) {
            $('.heroProductsDesktop').removeClass( 'toggleHeight' );
          }
            $('.heroProductsMobile').removeClass( 'toggleHeight' );
            $('.LogoImage').removeClass( 'toggleMargin' );
            $('.productHeroSecondary').removeClass( 'invisibleMe' );
            $('#productsHeroIcon').removeClass( 'invisibleMe' );
            $('subHeaderContainer').removeClass( 'invisibleMe' );

        }


  });
}

setHeroHeight();

heroShrinker();
//
// if ( (300 < scrollOffset < 450) ) {
//
//   if ( ((500 - scrollOffset) > 40 )) {
//     $(".heroProductsMobile").css('max-height', (500 - scrollOffset));
//     if ( ((scrollOffset - 150) < 287) && ((scrollOffset - 150) > 1)) {
//       $(".LogoImage").css('margin-top', (scrollOffset - 150));
//     }
//   }
// }

// var heroShrinker = function() {
//     var additionalShrink = 120;
//     var heroIcon = $('#productsHeroIcon');
//     var heroLogo = $('.LogoImage');
//     var heroSubText = $('.subHeaderContainer');
//     var hero = $('.hero-nav'),
//     heroHeight = $('.hero-nav').outerHeight(true);
//
//
//
//     $(window).scroll(function() {
//         var scrollOffset = $(window).scrollTop();
//         if (scrollOffset < heroHeight) {
//             $(hero).css('max-height', (heroHeight - scrollOffset - additionalShrink));
//             $('.imageX').css('height', (heroHeight - scrollOffset)*(1/2));
//
//         }
//         if (scrollOffset > (heroHeight - 250)) {
//             hero.addClass('fixme');
//             $(heroIcon).addClass('invisibleMe');
//             $(heroSubText).addClass('removeDisplay');
//             $(heroLogo).addClass('changeHeightMe');
//             // $('.imageContainer').toggleClass( 'visible' );
//
//
//
//         } else {
//             hero.removeClass('fixme');
//             $(heroIcon).removeClass('invisibleMe');
//             $(heroSubText).removeClass('removeDisplay');
//             $(heroLogo).removeClass('changeHeightMe');
//         };
//     });
// }
