$(document).ready(function(){
    //animasi underline navbar
    $(".animated-underline").mouseenter(function(){
        $(this).css("text-decoration", "underline");
    });
    $(".animated-underline").mouseleave(function(){
        $(this).css("text-decoration", "none");
    });
    //!animasi underline navbar

    //animasi underline navbar
    $(".hover-red").mouseenter(function(){
        $(this).css("color", "red");
    });
    $(".hover-red").mouseleave(function(){
        $(this).css("color", "white");
    });

    $(".navbar-jumbotron").mouseenter(function(){
        $(this).css("text-decoration", "underline");
    });
    $(".navbar-jumbotron").mouseleave(function(){
        $(this).css("text-decoration", "none");
    });
    //!animasi underline navbar

    $(window).resize(function(){
    	var pl = 0;
    	var pr = 0;
    	if ($(window).width() < 600) {
	    	pl = $(window).width() * 0;
	    	pr = $(window).width() * 0;
			$('.header-padding').css('padding-left', pl);
			$('.header-padding').css('padding-right', pr);
		}
	    else if ($(window).width() < 750) {
	    	pl = $(window).width() * 0.05;
	    	pr = $(window).width() * 0.05;
			$('.header-padding').css('padding-left', pl);
			$('.header-padding').css('padding-right', pr);
		}
		else {
			pl = $(window).width() * 0.14;
	    	pr = $(window).width() * 0.14;
			$('.header-padding').css('padding-left', pl);
			$('.header-padding').css('padding-right', pr);
		}

		if ($(window).width() < 576) {
			$('#kagebunshin').hide();
			$('#kagebunshin-y').removeClass('mt-2').addClass('mt-0');
		}
		else {
			$('#kagebunshin').show();
			$('#kagebunshin-y').removeClass('mt-0').addClass('mt-2');
		}

		if ($(window).width() < 1200) {
	    	pl = $(window).width() * 0.01;
	    	pr = $(window).width() * 0.01;
			$('.header-padding-2').css('padding-left', pl);
			$('.header-padding-2').css('padding-right', pr);
		}

		if ($(window).width() < 992) {
			pl = $(window).width() * 0.005;
	    	pr = $(window).width() * 0.005;
			$('.header-padding-2').css('padding-left', pl);
			$('.header-padding-2').css('padding-right', pr);
		}

	});


$(".navbar-toggler").click(function(){
        $('.navbar-toggler').hide();
        $('.closebtn').css('visibility', 'visible');
        $('#nav-item-kagebunshin').hide();
        $('#nav-item-kagebunshin-2').hide();
    });
$(".closebtn").click(function(){
        $('.navbar-toggler').show();
        $('.closebtn').css('visibility', 'hidden');
        $('#nav-item-kagebunshin').show(100);
        $('#nav-item-kagebunshin-2').show(100);
    });

//tutup
});

//================================= OFF CANVAS ===============================

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

//===================================== Lavalamp ==============================
$('#lampeffect').lavalamp({
    easing: 'easeOutBack',
    deepFocus: true
});



