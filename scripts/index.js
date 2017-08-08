var main= function(){
	$(window).scroll(function(){
		var wind = $(this).scrollTop();
		if(wind>=100){
			$('.header').addClass('new');
			$('.menu-itm').addClass('scroll-itm');
			$('.scroll-itm').removeClass('menu-itm');
		}
		if(wind<100){
			$('.header').removeClass('new');
			$('.menu-itm').removeClass('scroll-itm');
			$('.scroll-itm').addClass('menu-itm');
		}
	});
	$('.to-about').click(function(){
			$('html, body').animate({
				scrollTop: $('.about').offset().top
			},700);
	});
	$('.to-speaker').click(function(){
			$('html, body').animate({
				scrollTop: $('.speakers').offset().top
			},700);
	});
	$('.to-contact').click(function(){
			$('html, body').animate({
				scrollTop: $('.contact').offset().top
			},700);
	});
}

$(document).ready(main);