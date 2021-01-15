$(document).ready(function() {

	$('.has-dropdown').click(function() {
		$(this).find('.dropdown-menu').toggleClass('active');
	});

	$('.has-dropdown').mouseleave(function() {
		$(this).find('.dropdown-menu').removeClass('active');
	});

});
