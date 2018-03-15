$(function () {
	$('.sliderTop').slick({
	arrows:false,
	adaptiveHeight:true,
	dots: false,
  	infinite: true,
 	 autoplay:true,
 	 speed: 1000,
 	 fade: true,
  	cssEase: 'linear'
	});
});

$(function () {
	$('.sliderBottom').slick({
	arrows:true,
	adaptiveHeight:true
	});
});