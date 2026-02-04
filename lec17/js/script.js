// $(selector).event(function() {
//   action
// })

// $("#btn").click(function () {
// $("#txt").hide();
// $("#txt").toggle();
// $("#txt").fadeToggle();
// $("#txt").slideToggle();
// });

AOS.init();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
