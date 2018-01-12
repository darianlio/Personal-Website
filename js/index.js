$(".button").click(function(){
	reveal();
});

$(window).scroll(function () {
    // set distance user needs to scroll before we fadeIn navbar
	if ($(this).scrollTop() > 100) {
		$('.navbar').fadeIn();
	} else {
		$('.navbar').fadeOut();
	}
});

function reveal(){
	$(".navbar").fadeIn();
	$("#main").fadeIn();
	$(".bot").fadeIn();

	$('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 1000);	
}