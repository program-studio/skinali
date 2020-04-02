$(window).load(function () {
	$(".before-after").twentytwenty({
		before_label: 'Without Skinali', // Set a custom before label
		after_label: 'With Skinali' // Set a custom after label
	});
	$('.before-slider').slick({
		draggable: false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});





/*
	$('.reviews-slider').slick({
		
		draggable: false,
		dots: true,
		dotsClass: 'reviews-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});
	*/
	$('.menu-button').on('click', function () {
		$('.menu').toggleClass('menu_active');
	});
	

/* Select configuration */

	$('.select_checked').on('click', function(){
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});
	$('.select__option').on('click', function(){
		var value = $(this).attr('data-value');
		$('#select-type').val(value);
		$('.select_checked').text(value);
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top -130 + "px" });
		return false;
	});
	$('input[type="tel"]').mask("+1 (999) 999-9999");

/* Only show the map when scrolled to it */

	var reviews = $('.reviews');
	var reviewsTop = reviews.offset().top;
	$(window).bind('scroll', function(){
		var windowTop = $(this).scrollTop();
		if(windowTop > reviewsTop){
			$("#map").html('<div style="width: 100%;position: relative;"><iframe width="100%" height="410" src = "https://maps.google.com/maps?width=100%25&amp;height=410&amp;hl=en&amp;q=%205602%20Avenue%20U%2C%20Brooklyn%2C%20NY%2011234+(Skinali%20Factory)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder = "0" scrolling = "no" marginheight = "0" marginwidth = "0" ></iframe > <div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"> <small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="http://www.googlemapsgenerator.com/zh/">googlemapsgen (zh)</a> & <a href="http://eurodisneyaanbiedingen.nl/de-parken-en-toegangskaartjes/">http://eurodisneyaanbiedingen.nl/de-parken-en-toegangskaartjes/</a></small> </div> <style> #gmap_canvas img { max - width: none !important; background: none !important } </style> </div >')
			$(window).unbind('scroll')
		}
	});


	$(window).ready(function () {
		function checkWidth() {
			var windowWidth = $('body').innerWidth(),
				elem = $(".number-bullets"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
			// страницу для поиска нужного элемента
			if (windowWidth < 768) {
				$('.reviews-slider').slick({
					draggable: false,
					dots: true,
					dotsClass: 'reviews-slider__dots',
					prevArrow: $('.arrow-left'),
					nextArrow: $('.arrow-right')
				});
			} else {
				$('.reviews-slider').slick('unslick');
				sliderIsLive = false;
			}
		}
		checkWidth(); // проверит при загрузке страницы

		$(window).resize(function () {
			checkWidth(); // проверит при изменении размера окна клиента
		});

	});

	
});






/*
$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
			elem = $(".number-bullets"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
		// страницу для поиска нужного элемента
		if (windowWidth < 768) {
			$('.reviews-slider').slick({
				draggable: false,
				dots: true,
				dotsClass: 'reviews-slider__dots',
				prevArrow: $('.arrow-left'),
				nextArrow: $('.arrow-right')
			});
		} else {
			$('.reviews-slider').slick('unslick');
			sliderIsLive = false;
		}
	}

	checkWidth(); // проверит при загрузке страницы

	$(window).resize(function () {
		checkWidth(); // проверит при изменении размера окна клиента
	});
});
*/