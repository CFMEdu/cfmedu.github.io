// --------------------------------------------------
// Navigation Toggle
// --------------------------------------------------
$(function() {
  $(".navToggle").click(function() {
    $(".navToggle").toggleClass("active");
    $(".navMenu").toggleClass("active");
  })
  $(".navMenu a").click(function() {
    $(".navToggle").removeClass("active");
    $(".navMenu").removeClass("active");
  });
});

// --------------------------------------------------
// Hide Menu on Desktop View Only Scroll
// --------------------------------------------------
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   var windowWidth = $(window).width();
//   if (windowWidth >= 768) {
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("navBar").style.top = "0";
//     } else {
//       document.getElementById("navBar").style.top = "-50px";
//     }
//   } else {
//     document.getElementById("navBar").style.top = "0";
//   }
//   prevScrollpos = currentScrollPos;
// };

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navBar").style.top = "0";
//   } else {
//     document.getElementById("navBar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// --------------------------------------------------
// Disable skrollr on Movile View
// --------------------------------------------------
$(function() {
  var s = skrollr.init({
    forceHeight: false
  });
  if (s.isMobile()) {
      s.destroy();
  }
});

// --------------------------------------------------
// External Link Warning
// --------------------------------------------------
// $("a").filter(function() {
//   return this.hostname && this.hostname !== location.hostname;
// }).click(function(e) {
//   if(!confirm("You are about to proceed to an external website."))
//     {
//       e.preventDefault();
//     };
// });





