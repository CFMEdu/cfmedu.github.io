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
$(window).scroll(function(){
  var position = $(this).scrollTop();
  if(position > 50) {
    $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .iconBar, .navDeco, .navDropdown").addClass("shrink");
  } else {
    $(".navBar, .navLogo a, .navLogo img, .navMenu > ul > li > a, .iconBar, .navDeco, .navDropdown").removeClass("shrink");
  }
});


// --------------------------------------------------
// Sticky Subnavigation Menu on Scroll
// --------------------------------------------------
$(window).scroll(function() {
  var windowTop = $(window).scrollTop() + 50; 
  var divTop = $("#checkDiv").offset().top;
  if (windowTop >= divTop) {
    $(".subNavigation").addClass("stickyDiv");
  } else {
    $(".subNavigation").removeClass("stickyDiv");
  }
});



// --------------------------------------------------
// Smooth Scrolling on Click
// --------------------------------------------------
$(function() {
  $(document).on("scroll", onScroll);

  $("a").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      $(document).off("scroll");

      $("a").each(function() {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
      
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('.navBar').height() - $('.subNavigation').height()
      }, 800, 'swing', function(){
        $(document).on("scroll", onScroll);
      });
    }
  });
});


// --------------------------------------------------
// Toggle Subnavigation Menu Active Class on Scroll
// --------------------------------------------------
function onScroll() {
  var scrollPos = $(document).scrollTop() + $('.subNavigation').height();

  $('.subNavigation a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    
    if (refElement.position().top + -25 <= scrollPos && refElement.position().top + refElement.height() + 25 > scrollPos) {
      $('.subNavigation a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
};



// $(function() {
//   var url = window.location.toString();
//   var id = url.split("#")[1];

//   $('.anchorLink').click(function() {
//      ＄(window).location = $(url) + $(id);
//   });
// });


// --------------------------------------------------
// Testimonials Slidshow
// --------------------------------------------------
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonialSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }