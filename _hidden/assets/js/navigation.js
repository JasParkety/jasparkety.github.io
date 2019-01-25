var addShadow = function() {
  if ( (window.location.href.indexOf("products") > -1) || (window.location.href.indexOf("articles") > -1) || (window.location.href.indexOf("usecases") > -1) ) {
   $('.stickyNavContainer').addClass( 'shadowBottom' );
}
};

var removeShadow = function() {
  if ( (window.location.href.indexOf("products") > -1) || (window.location.href.indexOf("articles") > -1) || (window.location.href.indexOf("usecases") > -1) ) {
   $('.stickyNavContainer').removeClass( 'shadowBottom' );
}
};

$( ".closeButton" ).click(function() {
  if($('.transparentOverlayOfContent').css('height') > '1%') {

    if($('.displayedContentProducts').is(':visible')){
      $('.displayedContentProducts').toggleClass( 'add' );
      removeShadow();
    }

    if($('.SupportItemsContainer').is(':visible')){
      $('.displayedContentSupport').toggleClass( 'add' );
      removeShadow();
    }

    if($('.displayedContentAbout').is(':visible')){
      $('.displayedContentAbout').toggleClass( 'add' );
      removeShadow();
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
      if($('.displayedContentAbout').is(':visible')){
        $('.displayedContentAbout').toggleClass( 'add' );
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
    else if($('.displayedContentAbout').is(':visible')){
      $('.displayedContentAbout').toggleClass( 'add' );
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
  else if($('.displayedContentAbout').is(':visible')){
    $('.displayedContentAbout').toggleClass( 'add' );
    $('.displayedContentSupport').toggleClass( 'add' );
  }
  else {

    $('#secondaryNavContainer').toggleClass( 'on' );
    $('.displayedContentSupport').toggleClass( 'add' );
    $('.transparentOverlayOfContent').toggleClass( 'add' );
  }
});

$( "#toggleAbout" ).click(function() {
  if( ($('.transparentOverlayOfContent').css('height') > '1%') && ($('.displayedContentAbout').is(':visible')) ) {
    removeShadow();
  }
  else {
    addShadow();
  }
  if($('.displayedContentProducts').is(':visible')){
    $('.displayedContentProducts').toggleClass( 'add' );
    $('.displayedContentAbout').toggleClass( 'add' );
  }
  else if($('.displayedContentSupport').is(':visible')){
    $('.displayedContentSupport').toggleClass( 'add' );
    $('.displayedContentAbout').toggleClass( 'add' );
  }

  else {

    $('#secondaryNavContainer').toggleClass( 'on' );
    $('.displayedContentAbout').toggleClass( 'add' );
    $('.transparentOverlayOfContent').toggleClass( 'add' );
  }
});


// Here comes the Scroll Event when clicked on Usecases in the Grey Nav
// $( "#toggleAbout" ).click(function() {
//
//     $(document).ready(function(){
//         $('a[href^="#"]').click(function() {
//             var target = $(this.hash);
//             if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
//             if (target.length == 0) target = $('html');
//             if($(window).width() < 1000) {
//               $('html, body').animate({ scrollTop: target.offset().top - (70) }, 1000);
//             }
//             else {
//               $('html, body').animate({ scrollTop: target.offset().top - (13) }, 1000);
//             }
//         });
//     });
// })
