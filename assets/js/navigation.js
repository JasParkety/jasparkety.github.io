var addShadow = function() {
  if ( (window.location.href.indexOf("products") > -1) || (window.location.href.indexOf("articles") > -1) ) {
   $('.stickyNavContainer').addClass( 'shadowBottom' );
}
};

var removeShadow = function() {
  if ( (window.location.href.indexOf("products") > -1) || (window.location.href.indexOf("articles") > -1) ) {
   $('.stickyNavContainer').removeClass( 'shadowBottom' );
}
};



$( "#closeButtonID" ).click(function() {
  if($('.transparentOverlayOfContent').css('height') > '1%') {
    if($('.displayedContentProducts').is(':visible')){
      $('.displayedContentProducts').toggleClass( 'add' );
      removeShadow();
    }
    if($('.displayedContentSupport').is(':visible')){
      $('.displayedContentSupport').toggleClass( 'add' );
    }
    $('.transparentOverlayOfContent').toggleClass( 'add' );
    $('#secondaryNavContainer').toggleClass( 'on' );

  }
});

$( "#transparentOverlay" ).click(function() {
  if($('.transparentOverlayOfContent').css('height') > '1%') {
      $('.transparentOverlayOfContent').toggleClass( 'add' );
      $('#secondaryNavContainer').toggleClass( 'on' );
      removeShadow();

      if($('.displayedContentProducts').is(':visible')){
        $('.displayedContentProducts').toggleClass( 'add' );
      }
      if($('.displayedContentSupport').is(':visible')){
        $('.displayedContentSupport').toggleClass( 'add' );
      }
  }
});

$( "#toggleProducts" ).click(function() {
    if( ($('.transparentOverlayOfContent').css('height') > '1%') && ($('.displayedContentProducts').is(':visible')) ) {
      removeShadow();
    }
    else {
      addShadow();
    }

    if($('.displayedContentSupport').is(':visible')){
      $('.displayedContentSupport').toggleClass( 'add' );
      $('.displayedContentProducts').toggleClass( 'add' );
    }
    else {
      $('#secondaryNavContainer').toggleClass( 'on' );
      $('.displayedContentProducts').toggleClass( 'add' );
      $('.transparentOverlayOfContent').toggleClass( 'add' );
    }
});

$( "#toggleSupport" ).click(function() {
  if( ($('.transparentOverlayOfContent').css('height') > '1%') && ($('.displayedContentSupport').is(':visible')) ) {
    removeShadow();
  }
  else {
    addShadow();
  }
  if($('.displayedContentProducts').is(':visible')){
    $('.displayedContentProducts').toggleClass( 'add' );
    $('.displayedContentSupport').toggleClass( 'add' );
  }
  else {
    addShadow();
    $('#secondaryNavContainer').toggleClass( 'on' );
    $('.displayedContentSupport').toggleClass( 'add' );
    $('.transparentOverlayOfContent').toggleClass( 'add' );
  }
});


// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     if (scroll > 350) {
//     $('.containerMobile').css("background-color", "white");
//
//     }
//     else
//     $('.containerMobile').css("background-color", "#ebeceb");
//
//
// });
