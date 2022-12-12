$('.header__burger').on('click', () => {
	$('.menu').toggleClass('menu--open');
	$('.header__menu-right-wrapper').toggleClass('header__menu-right-wrapper--open');
})