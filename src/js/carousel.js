	$('.home-slider__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
	});

	$('.contact__slider').slick({
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
	});

	$('.blog__post-slider').slick({
		prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>'
	});

