$(document).ready(function() {

  // Set Header Navigation effects
	var setNav = function() {
		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};
	}

	// Scroll Events
	$(window).scroll(function(){
		//Navigation Effects
		setNav();

		//Scroll Effects

	});


	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});


	// Price Table
	var individual_price_table = $('#price_tables').find('.standard-cf');
	var company_price_table = $('#price_tables').find('.advanced-cf');


	$('.switch-toggles').find('.standard-cf').addClass('active');
	$('#price_tables').find('.standard-cf').addClass('active');

	$('.switch-toggles').find('.standard-cf').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.advanced-cf').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');
	});


	// Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();


    // Menu For Xs Mobile Screens
    if ($(window).height() < 450) {
    	$('#slide_out_menu').addClass('xs-screen');
    }

    $(window).on('resize', function(){
	    if ($(window).height() < 450) {
	    	$('#slide_out_menu').addClass('xs-screen');
	    } else{
	    	$('#slide_out_menu').removeClass('xs-screen');
	    }
    });

    // Accordion
    $('.collapse').collapse();

    // Magnific Popup
    $(".lightbox").magnificPopup();

		// Browser Scroll Position
		setNav();

});
