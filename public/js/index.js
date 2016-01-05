$(document).ready(function () {
	var headerHeight = $('header').height();
	var ps = $('#pseac');
	var pt = parseInt(ps.css('padding-top').replace('px', ''));
	$(document).scroll(function() {
		var pos = $(document).scrollTop();
		var parallax = (parseInt(pos * 0.5) + pt) + 'px';
		var rgba = (pos / headerHeight) * 0.55;
		$('header > #pseac').css('padding-top', parallax);
		$('header > .opaque').css('background-color', 'rgba(0, 0, 0, ' + rgba + ')');
	});

	// var sections = $('section#info > section');
	// $(document).scroll(function() {
	// 	var pos = $(document).scrollTop();
	// 	for (var i = 0 ; i < sections.length ; i++) {
	// 		if (pos <= $(sections[i]).offset().top) {
	// 			var name = $($(sections[i]).find('.name'));
	// 			name.css('position', 'absolute');
	// 			name.css('top', '-43px');
	// 			name.css('left', '0');
	// 		} else if (pos >= $(sections[i]).offset().top + $(sections[i]).innerHeight() + 10) {
	// 			var name = $($(sections[i]).find('.name'));
	// 			name.css('position', 'absolute');
	// 			name.css('top', '-43px');
	// 			name.css('left', '0');
	// 		} else if (pos >= $(sections[i]).offset().top) {
	// 			var name = $($(sections[i]).find('.name'));
	// 			var left = name.offset().left;
	// 			name.css('position', 'fixed');
	// 			name.css('top', '0');
	// 			name.css('left', left);
	// 		}
	// 	}
	// });
});