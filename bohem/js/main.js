$(function () {
	$('.topSlidar').slick({
	arrows:false,
	dots:true,
	adaptiveHeight:true
	});
});

$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menuCont").stop().slideToggle();
	});

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});

});