$( "#closeButtonID" ).click(function() {
  if($('.transparentOverlayOfContent').css('height') > '1%') {
    if($('.displayedContentProducts').is(':visible')){
      $('.displayedContentProducts').toggleClass( 'add' );
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

      if($('.displayedContentProducts').is(':visible')){
        $('.displayedContentProducts').toggleClass( 'add' );
      }
      if($('.displayedContentSupport').is(':visible')){
        $('.displayedContentSupport').toggleClass( 'add' );
      }
  }
});

$( "#toggleProducts" ).click(function() {
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
  if($('.displayedContentProducts').is(':visible')){
    $('.displayedContentProducts').toggleClass( 'add' );
    $('.displayedContentSupport').toggleClass( 'add' );
  }
  else {
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
