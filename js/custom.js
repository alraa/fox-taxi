$(document).ready(function(){

function viewport(){var n=window,i="inner";return"innerWidth"in window||(i="client",n=document.documentElement||document.body),{width:n[i+"Width"],height:n[i+"Height"]}}

/* bind load & resize */
var handler1 = function(){
	/* footer fixes */
	var footH = $(".footer").height();
	$(".main-wrapper").css("margin-bottom","-"+footH+"px");
	$(".main").css("padding-bottom",footH+"px");
	/* footer fixes */
	
	/* slider fix */
	var fix1 = $(".tabs").height();
	$(".main-top").css("height",fix1+"px");
	/* slider fix */
	
}
$(window).bind('load', handler1);
$(window).bind('resize', handler1);
/* bind load & resize */

/* clear input */		  
$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});
/* clear input */

/* mobile navigation */
$(".js-header-mobile__button-1").click(function(){$(".header").addClass("fixed-1");$(".header").removeClass("fixed-2");})
$(".js-header-mobile__button-2").click(function(){$(".header").addClass("fixed-2");$(".header").removeClass("fixed-1");})
$(".js-header-mobile__close-1").click(function(){$(".header").removeClass("fixed-1");})
$(".js-header-mobile__close-2").click(function(){$(".header").removeClass("fixed-2");})
/* mobile navigation */

/* inline padding */
$.fn.inlinebackgrounds = function() {
	$.each(this, function(i,t) {
		var split = $(t).html().split('<br>');
		var output = '';
		$.each(split, function(i,o){
			output += '<span>'+o+'</span>';
			if (i < (split.length - 1)) {
				output += '<br>';
			}
		});
		$(t).html(output);
	});
}

$('.footer-nav__link').inlinebackgrounds();
/* inline padding */

/* slider */
$('.js-slider__list').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 200
});

$(".js-slider__button_prev").click(function(){$(this).closest(".slider").find(".slick-prev").click();})
$(".js-slider__button_next").click(function(){$(this).closest(".slider").find(".slick-next").click();})
/* slider */

/* advantages fix */
var windowWidth=viewport().width;
var fix1 = $(".advantages__list_last").html();
$(".advantages__list_first").append(fix1);
/* advantages fix */



/* tabs */
$(".js-tabs-nav__item").click(function(){
	$(".js-tabs-nav__item").removeClass("tabs-nav__item_active");	
	$(this).addClass("tabs-nav__item_active");
	var curItem = $(this).data("item");
	$(".tabs-content__item").removeClass("tabs-content__item_active");
	$(".tabs-content__item[data-item="+curItem+"]").addClass("tabs-content__item_active");	
	var fix1 = $(".tabs").height();
	$(".main-top").css("height",fix1+"px");			
})
/* tabs */
});// end ready
/* custom js */