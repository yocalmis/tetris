$(document).ready(function(){
	$('.sidenav').sidenav();
    $('.city-slider').owlCarousel({
        items       : 1,
        loop        : true,
        margin      : 5,
        pagination  : true,
        nav         : true,
        navText     : ["<i class='material-icons'>chevron_left</i>","<i class='material-icons'>chevron_right</i>"],
    });
    // navbar search animation
    $('.menu-search').click(function() {
    	$('.mobile-search').addClass('mobile-search-open');
    });

    $('.search-close').click(function() {
    	$('.mobile-search').removeClass('mobile-search-open');
    });

    $('main').click(function() {
    	$('.mobile-search').removeClass('mobile-search-open');
    });

    $('footer').click(function() {
    	$('.mobile-search').removeClass('mobile-search-open');
    });
	
	
	   $('.tabs').tabs();

});


