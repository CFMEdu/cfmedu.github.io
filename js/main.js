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
    if(position > 50) {
      $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .iconBar, .navDeco, .navDropdown").addClass("shrink");
    } else {
      $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .iconBar, .navDeco, .navDropdown").removeClass("shrink");
    }
  });
});


// --------------------------------------------------
// Sticky Subnavigation Menu
// --------------------------------------------------

$(function() {
  $(document).on("scroll", onScroll);
  
  // add sticky class to subnavigation on scroll
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop() + 50; 
    var divTop = $("#checkDiv").offset().top;
    if (windowTop >= divTop) {
      $(".subNavigation").addClass("stickyDiv");
    } else {
      $(".subNavigation").removeClass("stickyDiv");
    }
  });  

  //smooth scroll
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function() {
      $(this).removeClass("active");
    })
    $(this).addClass("active");

    var target = this.hash,
        // menu = target;
        $target = $(target);
    $("html, body").stop().animate({
     "scrollTop": $target.offset().top
    }, 600, 'swing', function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.subNavigation a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.subNavigation a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
