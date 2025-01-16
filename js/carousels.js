$(window).on("load", () => {
  function updatePagination(swiper, numDiv) {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length;
    document.querySelector(
      `.${numDiv}`
    ).innerHTML = `<span class="current">${currentSlide}</span>/<span class="total">${totalSlides}</span>`;
  }

  const head = new Swiper(".carousel__head", {
    loop: true,
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows

    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   400: {
    //     slidesPerView: 1.2,
    //     // spaceBetween: 10,
    //   },
    //   600: {
    //     slidesPerView: 2,
    //     // spaceBetween: 40,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     // spaceBetween: 40,
    //   },
    // },
  });

  const projects = new Swiper(".carousel__projects", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    on: {
      init: function () {
        updatePagination(this, "projects__carousel-num");
      },
      slideChange: function () {
        updatePagination(this, "projects__carousel-num");
      },
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".projects__carousel-next",
      prevEl: ".projects__carousel-prev",
    },
  });

  const news = new Swiper(".carousel__news", {
    loop: true,
    // effect: "fade",
    spaceBetween: 20,

    fadeEffect: {
      crossFade: true,
    },

    on: {
      init: function () {
        updatePagination(this, "news__carousel-num");
      },
      slideChange: function () {
        updatePagination(this, "news__carousel-num");
      },
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".news__carousel-next",
      prevEl: ".news__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.2,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });

  const services = new Swiper(".carousel__services", {
    loop: true,
    spaceBetween: 30,
    fadeEffect: {
      crossFade: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".services__carousel-next",
      prevEl: ".services__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.2,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });

  const testimonials = new Swiper(".carousel__testimonials", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel_testimonials-next",
      prevEl: ".carousel_testimonials-prev",
    },

    // And if we need scrollbar

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
});
