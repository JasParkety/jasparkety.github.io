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
  $('.transparentOverlayOfContent').toggleClass( 'add' );
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
    $('.stickyNavContainer').css("background-color", "#bfc2c9");
    $('.stickyNavContainer').css("height", "75px");
    $('#secondaryNavContainer').css("margin-top", "75px");
    $('.transparentOverlayOfContent').css("margin-top", "475px");
    }
    else
    $('.stickyNavContainer').css("background-color", "#ebeceb");
    $('.stickyNavContainer').css("height", "100px");
    $('#secondaryNavContainer').css("margin-top", "100px");
    $('.transparentOverlayOfContent').css("margin-top", "500px");
});
