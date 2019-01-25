// Patched in order to be allow some config options
/*
 * jQuery Touch Optimized Sliders "R"Us
 * Youtube media
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 */
 (function( $ ) {

	var _PLUGIN_ = 'tosrus',
		_MEDIA_	 = 'youtube';

	var _mediaInitiated = false,
		_c, _d, _e, _f, _g;
	var _player;

	// Define YT_ready function.
	var YT_ready = (function() {
		var onReady_funcs = [], api_isReady = false;
		/* @param func function     Function to execute on ready
		 * @param func Boolean      If true, all qeued functions are executed
		 * @param b_before Boolean  If true, the func will added to the first
		 position in the queue*/
		return function(func, b_before) {
			if (func === true) {
				api_isReady = true;
				while (onReady_funcs.length) {
					// Removes the first func from the array, and execute func
					onReady_funcs.shift()();
				}
			} else if (typeof func == "function") {
				if (api_isReady) func();
				else onReady_funcs[b_before?"unshift":"push"](func);
			}
		}
	})();

	// This function will be called when the API is fully loaded
	window.onYouTubeIframeAPIReady = function() {
		YT_ready(true);
	};


	// when video ends event.data === 0 check if Fullscreen is enabled, if so close it but check first if the method return 0 and afterwards only take the one which works in the specific browser
function onPlayerStateChange(event) {
 		if(event.data === 0) {
  			if (document.fullscreenElement !== null) {
							if (document.cancelFullScreen) {
								document.cancelFullScreen();
							} else if (document.mozCancelFullScreen) {
								document.mozCancelFullScreen();
							} else if (document.webkitCancelFullScreen) {
								document.webkitCancelFullScreen();
							} else if (document.msExitFullscreen) {
								document.msExitFullscreen();
							}
    		}
  	}
}

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


	$[ _PLUGIN_ ].media[ _MEDIA_ ] = {

		//	Filter anchors
		filterAnchors: function( $anchor )
		{
			return ( $anchor.attr( 'href' ).toLowerCase().indexOf( 'youtube.com/watch?v=' ) > -1 );
		},

		//	Create Slides from anchors
		initAnchors: function( $slide, href )
		{
			var url = href;
			href = href.split( '?v=' )[ 1 ].split( '&' )[ 0 ];

			var id = "youtube"+Math.round(10000*Math.random());
			$('<div id="'+id+'"></div>').appendTo( $slide );

			var self = this;
			var _player = undefined;

			YT_ready(function(){
				_player = new YT.Player(id, {
					videoId: href,
					playerVars: self.opts[_MEDIA_].urlParams,
					events: {

						'onReady': function(event) {
							var height = $('#'+id).outerHeight();
							if(height > 720){
								_player.setPlaybackQuality('hd1080');
							}else if(height > 480){
								_player.setPlaybackQuality('hd720');
							}

						},
						'onStateChange': onPlayerStateChange
					}
				});
				self.opts[_MEDIA_].playerCallback(_player);
			});

			initVideo.call( this, $slide );

		},

		//	Filter slides
		filterSlides: function( $slide )
		{
			if ( $slide.is( 'iframe' ) && $slide.attr( 'src' ) )
			{
				return ( $slide.attr( 'src' ).toLowerCase().indexOf( 'youtube.com/embed/' ) > -1 );
			}
			return false;
		},

		//	Create slides from existing content
		initSlides: function( $slide )
		{
			initVideo.call( this, $slide );
		}
	};

	$[ _PLUGIN_ ].defaults.media[ _MEDIA_ ] = {};


	//	Functions
	function initVideo( $s )
	{
		if ( !_mediaInitiated )
		{
			_c = $[ _PLUGIN_ ]._c;
			_d = $[ _PLUGIN_ ]._d;
			_e = $[ _PLUGIN_ ]._e;
			_f = $[ _PLUGIN_ ]._f;
			_g = $[ _PLUGIN_ ]._g;

			_d.add( 'ratio maxWidth maxHeight' );

			_mediaInitiated = true;
		}

		var that = this;

		var $a = $s.data( $[ _PLUGIN_ ]._d.anchor ) || $();

		var ratio 		= $a.data( _d.ratio ) 		|| this.opts[ _MEDIA_ ].ratio,
			maxWidth 	= $a.data( _d.maxWidth ) 	|| this.opts[ _MEDIA_ ].maxWidth,
			maxHeight	= $a.data( _d.maxHeight )	|| this.opts[ _MEDIA_ ].maxHeight;

		$s.removeClass( _c.loading )
			.trigger( _e.loaded )
			.on( _e.loading,
			function( e )
			{
				_f.resizeRatio( $s.children(), $s, maxWidth, maxHeight, ratio );
			}
		);

		this.nodes.$wrpr
			.on( _e.sliding,
			function( e )
			{
				if(_player) {
					_player.pauseVideo();
				}
			}
		)
			.on( _e.opening,
			function( e )
			{
				_f.resizeRatio( $s.children(), $s, maxWidth, maxHeight, ratio );
			}
		)

			.on( _e.closing,
			function( e )
			{
				// if(_player) {
				// 		_player.pauseVideo();
				//
				// }
			}
		);

		_g.$wndw
			.on( _e.resize,
			function( e )
			{
				_f.resizeRatio( $s.children(), $s, maxWidth, maxHeight, ratio );
			}
		);

	}


	//	Defaults
	$[ _PLUGIN_ ].defaults[ _MEDIA_ ] = {
		ratio		: 16 / 9,
		maxWidth	: false,
		maxHeight	: false,
		urlParams   : {},
		playerCallback: function(player){}
	};


})( jQuery );
