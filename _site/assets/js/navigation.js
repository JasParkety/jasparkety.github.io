var $thisParagraph = $('.stickySecondary');



$( "#closeButtonID" ).click(function() {
  if($('.transparentOverlayOfContent').css('height') > '1%') {
      $('.transparentOverlayOfContent').toggleClass( 'add' );
      $('#secondaryNavContainer').toggleClass( 'on' );
      $('.displayedContent').toggleClass( 'add' );
  }
});

$( "#transparentOverlay" ).click(function() {
  if($('.transparentOverlayOfContent').css('height') > '1%') {
      $('.transparentOverlayOfContent').toggleClass( 'add' );
      $('#secondaryNavContainer').toggleClass( 'on' );
      $('.displayedContent').toggleClass( 'add' );
  }
});

$( "#toggle" ).click(function() {

  $('#secondaryNavContainer').toggleClass( 'on' );
  $('.displayedContent').toggleClass( 'add' );

  if($('.transparentOverlayOfContent').css('height') > '1%') {
      $('.transparentOverlayOfContent').toggleClass( 'add' );
  }

  else {
    setTimeout(function(){$('.transparentOverlayOfContent').toggleClass( 'add' );}, 320);

  }



});