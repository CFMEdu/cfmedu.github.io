// --------------------------------------------------
// Navigation Toggle
// --------------------------------------------------
$(function() {
  $(".navToggle").click(function() {
    $(".navToggle, .navMenu").toggleClass("active");
  })
  $(".navMenu a").click(function() {
    $(".navToggle, .navMenu").removeClass("active");
  });
});

// --------------------------------------------------
// Shrink Nav Bar on Scroll
// --------------------------------------------------
$(function() {  
  $(window).scroll(function(){
    var position = $(this).scrollTop();
    if(position > 10) {
      $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .iconBar, .navList, .navDropdown").addClass("fixed");
    } else {
      $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .iconBar, .navList, .navDropdown").removeClass("fixed");
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





