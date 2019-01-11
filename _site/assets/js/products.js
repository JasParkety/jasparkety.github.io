var heroShrinker = function() {
    var additionalShrink = 120;
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
        $(hero).parent().css('padding-top', heroHeight);
    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('max-height', (heroHeight - scrollOffset - additionalShrink));
            $('.imageX').css('height', (heroHeight - scrollOffset)*(1/2));
        }
        if (scrollOffset > (heroHeight - 215)) {
            hero.addClass('fixme');
            $('#productsHeroIcon').toggleClass('productIconToggleVisibility');
        } else {
            hero.removeClass('fixme');
            $('#productsHeroIcon').toggleClass('productIconToggleVisibility');

        };
    });
}

var opacityHandlerIcon = function() {
  $('.transparentOverlayOfContent').toggleClass( 'add' );
}


heroShrinker();
