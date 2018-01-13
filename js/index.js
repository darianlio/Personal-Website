window.sr = ScrollReveal({ duration: 1000, origin: 'bottom', reset: true });
sr.reveal('#content h1', {duration: 800, origin: 'top'});
sr.reveal('#content h3', {duration: 700, origin: 'top'});
sr.reveal('#content hr', {duration: 600, origin: 'top'});
sr.reveal('#content a', {duration: 500, origin: 'top'});
sr.reveal('#portfolio h1', {duration: 700, origin: 'bottom'});
sr.reveal('.first', {duration: 600, origin: 'left'});
sr.reveal('.second', {duration: 700, origin: 'left'});
sr.reveal('#aboutme', {duration: 600, origin: 'bottom'});
sr.reveal('#aboutme p', {duration: 700, origin: 'bottom'});
sr.reveal('.web', {duration: 700, origin: 'bottom'});
sr.reveal('.code', {duration: 800, origin: 'bottom'});
sr.reveal('.build', {duration: 900, origin: 'bottom'});
sr.reveal('.skill', {duration: 600, origin: 'bottom'});
sr.reveal('#aboutme .img', {duration: 1000, origin: 'bottom'});

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