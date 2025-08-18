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

    $('#clients').owlCarousel({
      loop: true, nav: false, dots: false,
      smartSpeed: 500, autoplay: true,
      autoplayTimeout: 3000, responsiveClass: true,
      autoplayHoverPause: false, stagePadding: 0,
      slideTransition: 'linear',
      autoplayTimeout: 1300, autoplaySpeed: 1300,
      responsive: {
        0: {items: 5, margin: 20}, 
        768: {items: 11, margin: 22}, 
        992: {items: 13, margin: 26}, 
        1200: {items: 15, margin: 30},
      }
    });
  });

}
)(jQuery);





$('#exampleModal').on('show.bs.modal', function(event) {

  "use strict";

  var logsContainer = document.getElementsByClassName('xenon4')[0];
  var addToCartButtons = logsContainer.getElementsByClassName('butn');
  var modal = $(this)

  for (var i = 0; i < addToCartButtons.length; i++) {
    var btn = addToCartButtons[i];
    btn.addEventListener('click', addToCartClicked);
  }

  function addToCartClicked(event) {
    var btn = event.target;
    var website = btn.parentElement.children[0].innerText;
    var info1 = btn.parentElement.children[1].innerText;
    var info2 = btn.parentElement.children[2].innerText;
    var info3 = btn.parentElement.children[3].innerText;
    var info4 = btn.parentElement.children[4].innerText;
    var account = btn.parentElement.children[5].innerText;

    if(account.includes('America')) {
      account = 'Bank America';
    }

    modal.find("#saveH4").text(account.split('[')[0]);
    document.getElementById('monez').innerHTML = `Bank Info <i class="fas fa-angle-down"></i>`;
    modal.find(".website p").text(website);
    modal.find(".info1 p").text(info1);
    modal.find(".info2 p").text(info2);
    modal.find(".info3 p").text(info3);
    modal.find(".info4 p").text(info4);
    modal.find(".account p").text(account);

  }
});
