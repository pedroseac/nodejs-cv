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
});