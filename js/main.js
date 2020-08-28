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
// Shrink Nav Bar on Scroll
// --------------------------------------------------
$(function() {  
  $(window).scroll(function(){
    var position = $(window).scrollTop();
    if(position > 100) {
      $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .navList, .navDropdown").addClass("fixed");
    } else {
      $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .navList, .navDropdown").removeClass("fixed");
    }
  });
});

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





