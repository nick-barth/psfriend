// jQuery(function ($) {
//
// 	$.extend(jQuery.easing,{easeInOutQuad:function(t) {return t<.5 ? 2*t*t : -1+(4-2*t)*t }})
//
// 	$('.home__anchorbar-anchor').click(function () {
// 		$('html, body').animate({
// 			scrollTop: $('.' + $(this).data('anchor')).offset().top
// 		}, 1000, 'easeInOutQuad');
// 		return false;
// 	});
//
// 	var $anchorbar = $('.home__anchorbar');
// 	var offsetTop = $anchorbar.offset().top;
// 	function fixDiv () {
// 		var isPositionFixed = ($anchorbar.css('position') == 'fixed');
// 		if ($(window).scrollTop() > offsetTop) {
// 			$anchorbar.addClass('home__anchorbar--fixed');
// 		}
// 		else {
// 			$anchorbar.removeClass('home__anchorbar--fixed');
// 		}
// 	}
// 	$(window).scroll(fixDiv);
// 	fixDiv();
// });
