const changeBox = () => {
	if ($(window).width() < 633) {
		$('.home-works__item--line-top').appendTo($('.home-works__items-box'));
	} else {
		$('.home-works__item--line-top').appendTo($('.home-works__items'));
	}
}

$(window).resize(changeBox);