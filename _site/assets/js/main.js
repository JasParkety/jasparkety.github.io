$(function(){

	// enables links to toggle other elements. specify a link in the following form:
	// href="#toggles:.foo"
	// in order to toggle the state of all elements that match the selector .foo
	$('[href^="#toggles:"]').on('click', function(e){
		var selector = $(this).attr('href').split(':',2)[1];
		$(selector).toggle();
		e.preventDefault();
		$(this).blur();
	});

	$('#scrolltotop').on('click', function(evt){
		$(window).scrollTo($(this).attr('href'), 500);
		evt.preventDefault();
	});

	var state = false;
	$(window).on('scroll', function(){
		var newState = (window.scrollY > 20);
		if(newState != state){
			if(newState){
				$('html').addClass('scrolled-down');
			}else{
				$('html').removeClass('scrolled-down');
			}
			state = newState;
		}
	});
	$(window).trigger('scroll');

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



	$('[data-scrollto]').on('click', function(){
		var target = $(this).data('scrollto');
		var timeout = 1; // delay is always required in order to let the expanding start prior

		if($(this).data('collapse-group')){
			// TODO: this is not perfect, but otherwise it interferes with the collapsing
			timeout = 400;
		}

		window.setTimeout(function(){
			$(window).scrollTo(target, 500);
		}, timeout);
	});

	$('[data-collapse-group]').on('click', function(){
		var groupName = $(this).data('collapse-group');
		var $targets = $('[data-collapse-group="'+groupName+'"]').not($(this));
		$targets.each(function(){
			var $element = $($(this).attr('href'));
			$element.collapse('hide');
		});
	});


	if($('.navbar-nav-primary > .active').length > 0) {

		// align second level submenu
		var repositionSubmenu = function () {

			var offset = $('.navbar-nav-primary > .active').position().left + $('.navbar-nav-primary > .active a').innerWidth() / 2;

			if (offset + $('.active .navbar-nav-secondary').width() / 2 > $('.active .navbar-nav-secondary-container').width()) {
				offset = $('.active .navbar-nav-secondary-container').width() - $('.active .navbar-nav-secondary').width() / 2;
			}

			$('.active .navbar-nav-secondary').css({'left': offset, 'opacity': '1'});
			$('.active .navbar-nav-secondary-container').show();

		};

		repositionSubmenu();
		$(window).on('resize', repositionSubmenu);
		
	}


	// async form submissions
	$(document).on('submit', '.qitasc-form', function(evt){
		var $form = $(this);
		var $container = $form.parents('.qitasc-form-container').first();

		if($container.is('.is-submitting')){
			return;
		}

		$container.addClass('is-submitting');

		var xhr = $.ajax({
			type: $form.prop('method'),
			url: $form.prop('action'),
			data: $form.serialize(),
			dataType: 'json'
		});

		var setErrorState = function(state, message){
			if(state){
				$container.addClass('is-error');
				if(!message){
					message = '';
				}
				$container.find('.qitasc-form-error-message').text(message);
			}else{
				$container.removeClass('is-error');
			}
			$container.find('.qitasc-form-error').prop('hidden', !state);
			$container.find('.qitasc-form-success').prop('hidden', state);
		};

		xhr.done(function(data){
			console.log(data);
			if(data.status && data.status == 'OK'){
				setErrorState(false);
				$container.addClass('is-success');
				$form.prop('hidden', true);
			}else{
				setErrorState(true, data.message);
			}
		});
		xhr.fail(function(){
			setErrorState(true);
		});
		xhr.always(function(){
			$container.removeClass('is-submitting');
		});

		evt.preventDefault();

	});
	
});