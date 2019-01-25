$(function(){

	var fadeOutGenerator = function(getVolume, setVolume, pause, maximumVolume){
		var result = function () {
			var volume = getVolume() / maximumVolume;
			volume -= 0.02;
			if (volume <= 0) {
				pause();
				window.setTimeout(function(){
					setVolume(maximumVolume);
				}, 100);
			} else {
				setVolume(volume * maximumVolume);
				window.setTimeout(result, 10);
			}
		};
		return result;
	};

	$('.js-lightbox-video').each(function(){
		var videoLightbox = $(this).tosrus({
			wrapper: {
				target: 'window'
			},
			keys: {
				close: true
			},
			youtube: {
				urlParams: {
					rel: 0,
					showinfo: 0,
					color: 'white',
					autoplay: 1
				},
				playerCallback: function(player){

					player.addEventListener('onReady', function (event) {
						//player.playVideo();
					});

					player.addEventListener('onStateChange', function (event) {
						if(event.data == YT.PlayerState.ENDED) {
							videoLightbox.trigger('close');
						}
					});

					videoLightbox.on('closing.tos', function(){
						fadeOutGenerator(player.getVolume.bind(player), player.setVolume.bind(player), player.pauseVideo.bind(player), 100)();
					});

				}
			}
		});

		var closeLightbox = function(){
			videoLightbox.trigger('close');
		};

		videoLightbox.on('opening.tos', function(){
			resizeVideo();

			if($(this).find('video').length > 0) {
				var player = videojs('#' + $(this).find('video').first().attr('id')).player();
				player.play();
				player.off('ended', closeLightbox);
				player.on('ended', closeLightbox);
			}
		});

		videoLightbox.on('closing.tos', function () {
			if($(this).find('video').length > 0) {
				var player = videojs('#' + $(this).find('video').first().attr('id')).player();

				fadeOutGenerator(player.volume.bind(player), player.volume.bind(player), player.pause.bind(player), 1)();
			}
		});

	});



	var resizeVideo = function(){
		$('.js-lightbox-video-player-content').each(function(){
			$(this).width('');
			$(this).height('');
			var sliderWidth = $(this).outerWidth();
			var sliderHeight = $(this).outerHeight();
			if(sliderWidth/16 < sliderHeight/9){
				// portrait
				$(this).width(sliderWidth);
				$(this).height(sliderWidth/16*9);
			}else{
				// landscape
				$(this).height(sliderHeight);
				$(this).width(sliderHeight/9*16);
			}
		});
	};
	$(window).on('resize', resizeVideo);
	resizeVideo();



});
