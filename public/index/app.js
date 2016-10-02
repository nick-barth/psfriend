jQuery(function ($) {
	var $anchorbar = $('.home__anchorbar');
	var offsetTop = $anchorbar.offset().top;
	function fixDiv () {
		var isPositionFixed = ($anchorbar.css('position') == 'fixed');
		if ($(window).scrollTop() > offsetTop) {
			$anchorbar.addClass('home__anchorbar--fixed');
		}
		else {
			$anchorbar.removeClass('home__anchorbar--fixed');
		}
	}
	$(window).scroll(fixDiv);
	fixDiv();
});
