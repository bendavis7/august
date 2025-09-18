(function($) {
  "use strict";
  var $window = $(window);
  $('#preloader').fadeOut('normall', function() {
    $(this).remove();
  });

  $window.on('scroll', function() {
    var scroll = $window.scrollTop();
    if (scroll <= 50) {
      $("header").removeClass("scrollHeader").addClass("fixedHeader");
    } else {
      $("header").removeClass("fixedHeader").addClass("scrollHeader");
    }
  });

  $window.on('scroll', function() {
    if ($(this).scrollTop() > 500) {
      $(".scroll-to-top").fadeIn(400);
    } else {
      $(".scroll-to-top").fadeOut(400);
    }
  });

  $(".scroll-to-top").on('click', function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  var pageSection = $(".parallax,.bg-img");
  pageSection.each(function(indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });


  $(document).ready(function() {

    "use strict";

    $('#example').dataTable();   

    $('#chime-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 3 },
        768: { items: 2, margin: -10, dotsEach: 3 },
        992: { items: 2, margin: -10, dotsEach: 3 },
      }
    });

    $('#bank-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 6 },
        768: { items: 2, margin: -10, dotsEach: 6 },
        992: { items: 2, margin: -10, dotsEach: 6 },
      }
    });

    $('#wire-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });

    $('#hunt-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });

    $('#navy-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });

    $('#wells-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 2 },
        768: { items: 2, margin: -10, dotsEach: 2 },
        992: { items: 2, margin: -10, dotsEach: 2 },
      }
    });


    $('#wood-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });

    $('#paypal-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });

    $('#ach-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });

    $('#coin-carousel').owlCarousel({
      loop: true, autoplay: true, responsiveClass: true, 
      dots: true, nav: false, smartSpeed: 500, 
      autoplayHoverPause: false, 
      stagePadding: 0, slideTransition: 'linear', 
      autoplayTimeout: 5000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: { items: 1.2, margin: -10, dotsEach: 4 },
        768: { items: 2, margin: -10, dotsEach: 4 },
        992: { items: 2, margin: -10, dotsEach: 4 },
      }
    });


    $('.countup').counterUp({
      delay: 30,
      time: 4000
    });

  });

}
)(jQuery);



jQuery(document).ready(function($){
	var $timeline_block = $('.cd-time-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-time-img, .cd-time-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-time-img').hasClass('is-hidden') ) {
				$(this).find('.cd-time-img, .cd-time-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});