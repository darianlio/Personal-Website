window.sr = ScrollReveal({ duration: 1000, origin: 'bottom', reset: true });
sr.reveal('#content h1', 100);
sr.reveal('#content h3', 100);
sr.reveal('#content hr', 100);
sr.reveal('#content a', 100);
sr.reveal('#portfolio h1', 100);
sr.reveal('.first', 100);
sr.reveal('.second', 100);
sr.reveal('#aboutme', 100);
sr.reveal('.web', 100);
sr.reveal('.code', 100);
sr.reveal('.build', 100);
sr.reveal('.skill', 100);

var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

	close.addEventListener("click", function(){
	var menuIcon = close.children;
	for (i = 0; i < menuIcon.length; i++){
		menuIcon[i].classList.toggle("active");
	}   
});

$(".button").click(function(){
	reveal();
});

$(window).scroll(function () {
    // set distance user needs to scroll before we fadeIn navbar
	if ($(this).scrollTop() > 100) {
		$('#topNav').fadeIn();
	} else {
		$('#topNav').fadeOut();
	}
});

function reveal(){
	$("#topNav").fadeIn();
	$('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 50
    }, 1000);	
}

$("#about").click(function(){
	$('html, body').animate({
        scrollTop: $("#aboutme").offset().top - 50
    }, 1000);	
    closeDropdown();
});

$("#sk").click(function(){
	$('html, body').animate({
        scrollTop: $("#skills").offset().top - 50
    }, 1000);	
    closeDropdown();
});

$("#exp").click(function(){
	$('html, body').animate({
        scrollTop: $("#experience").offset().top - 50
    }, 1000);	
    closeDropdown();
});

$("#ed").click(function(){
	$('html, body').animate({
        scrollTop: $("#education").offset().top - 50
    }, 1000);	
    closeDropdown();
});

$("#port").click(function(){
	$('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 50
    }, 1000);	

    closeDropdown();
});

function closeDropdown(){
	//to close
	if (nav.style.height <= "325px") {
		nav.style.height = "50px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
			menu[i].style.opacity="0.0";
			menu[i].style.marginTop="100px";
		};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
}

function navToggle() {	
	//to close
	if (nav.style.height <= "325px") {
		nav.style.height = "50px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
			menu[i].style.opacity="0.0";
			menu[i].style.marginTop="100px";
		};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
		nav.style.height = "325px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
			menu[i].style.opacity="1.0";
			menu[i].style.marginTop="0px";
		};
	}

};
