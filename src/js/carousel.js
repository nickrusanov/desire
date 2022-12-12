$('.home-slider__slider').slick({
	dots: true,
	arrows: false,
	fade: true,
	autoplay: true,
});

$('.contact__slider').slick({
	slidesToShow: 10,
	slidesToScroll: 10,
	dots: true,
	arrows: false,
	speed: 300,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		},
		{
			breakpoint: 840,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 541,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
	]
});

$('.blog__post-slider').slick({
	prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>'
});

