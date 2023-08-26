jQuery(document).ready(function ($) {
  // Owl Carousel
  var owl = $(".carousel-default");
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605", "&#xe606"],
    autoplay: true,
    autoplayTimeout: 4000,
  });

  // Owl Carousel - Content Blocks
  var owl = $(".carousel-blocks");
  owl.owlCarousel({
    nav: true,
    dots: false,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 3,
      },
      769: {
        items: 4,
      },
    },
    loop: true,
    navText: ["&#xe605", "&#xe606"],
    autoplay: true,
    autoplayTimeout: 5000,
  });

  // Owl Carousel - Content 3 Blocks
  var owl = $(".carousel-3-blocks");
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 3,
      },
      769: {
        items: 4,
      },
    },
    loop: true,
    navText: ["&#xe605", "&#xe606"],
    autoplay: true,
    autoplayTimeout: 5000,
  });

  var owl = $(".carousel-fade-transition");
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605", "&#xe606"],
    autoplay: true,
    animateOut: "fadeOut",
    autoplayTimeout: 4000,
  });

  // Sticky Nav Bar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".sticky").addClass("fixed");
    } else {
      $(".sticky").removeClass("fixed");
    }

    var transY = $(this).scrollTop();
    $(".hero-v1-image-center").css(
      "transform",
      `translate3d(0px, -${
        (transY * 2) / 100
      }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $("#w-node-_4e9aecdf-ea6d-1837-fab4-96e135d16c83-0a989a75").css(
      "transform",
      `translate3d(0px, ${
        transY / 100
      }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $("#w-node-_11d23e0e-018c-8183-617a-f9839add8397-0a989a75").css(
      "transform",
      `translate3d(0px, ${
        transY / 100
      }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    console.log($(this).scrollTop());
  });
});
