$(window).on("load", () => {
  new WOW({
    offset: 50,
    mobile: false,
  }).init();
  // ______________________________header__scroll_________________________________

  function addScroll() {
    $(".header").addClass("header__scrolled");
    // $(".navigator").addClass("header__scrolled");
  }

  function removeScroll() {
    $(".header").removeClass("header__scrolled");
    // $(".navigator").removeClass("header__scrolled");
  }

  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2 ? addScroll() : removeScroll();

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2 ? addScroll() : removeScroll();
  });

  // ______________________________.mobile__toggler________________________________

  function toggleNav() {
    $(".navigator__navigation__popup").toggleClass("active");
    $(".navigator__open-icon").toggleClass("active");
  }

  $(".navigator__open").on("click", function () {
    toggleNav();
  });
  $(".navigator__navigation__link").on("click", function () {
    toggleNav();
  });

  // ______________________________popup_________________________________
  $(".corner-call-btn").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });
  $(".call-form__open").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });
  $(".open__about-more").on("click", function () {
    $(".about-more").fadeIn(300);
  });

  $(".popup__close").on("click", function () {
    $(".popup").fadeOut(300);
  });

  $(".popup-mini__form").on("submit", function (e) {
    e.preventDefault();
    $(".popup-call-form").fadeOut(300);
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".popup__form input").val("");
    }, 700);
  });

  $(".single-form").on("submit", function (e) {
    e.preventDefault();
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".single-form input").val("");
    }, 700);
  });

  $(".callback-form").on("submit", function (e) {
    e.preventDefault();
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".callback-form input").val("");
    }, 700);
  });

  // $(".feedback__form").on("submit", function (e) {
  //   e.preventDefault();

  //   $(".successful").fadeIn(300);
  //   setTimeout(() => {
  //     $(".feedback__form input").val("");
  //   }, 700);
  // });

  $(".popup").click((e) => {
    let div = $(".popup__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup").fadeOut(400);

      setTimeout(() => {
        $(".popup__form input").val("");
      }, 700);
    }
  });

  // ______________________________popup - big_________________________________

  // function hidePopup() {
  //   $(".popup-big__wrapper").removeClass("active");
  //   $(".wrapper__success").removeClass("active");
  //   setTimeout(() => {
  //     $(".popup-big").fadeOut(400);
  //   }, 500);
  // }

  // function showPopupFrom() {
  //   $(".vacancy-form").fadeIn(400);
  //   setTimeout(() => {
  //     $(".wrapper__vacancy").addClass("active");
  //   }, 200);
  // }
  // function fadeOutPopupForm() {
  //   $(".vacancy-form").fadeOut(400);
  //   setTimeout(() => {
  //     $(".wrapper__vacancy").removeClass("active");
  //   }, 1000);
  // }

  // function fadeInPopupSuccess() {
  //   $(".wrapper__success").addClass("active");
  //   setTimeout(() => {
  //     $(".successful-popup-big").fadeIn(400);
  //   }, 500);
  // }

  // $(".vacancy-form__open").on("click", function () {
  //   showPopupFrom();
  // });

  // $(".popup-big__close").on("click", function () {
  //   hidePopup();
  // });

  // $(".popup-big__form").on("submit", function (e) {
  //   e.preventDefault();
  //   fadeOutPopupForm();
  //   fadeInPopupSuccess();
  //   setTimeout(() => {
  //     $(".popup-big__form input").val("");
  //   }, 700);
  // });

  // $(".feedback__form").on("submit", function (e) {
  //   e.preventDefault();

  //   $(".successful").fadeIn(300);
  //   setTimeout(() => {
  //     $(".feedback__form input").val("");
  //   }, 700);
  // });

  // $(".popup-big").click((e) => {
  //   let div = $(".popup-big__wrapper");
  //   if (!div.is(e.target) && div.has(e.target).length === 0) {
  //     hidePopup();

  //     setTimeout(() => {
  //       $(".popup-big__form input").val("");
  //     }, 700);
  //   }
  // });

  // ______________________________language_________________________________

  $(".language__open").on("click", function (e) {
    $(this).parent().find(".language__body").slideToggle(400);
  });

  $(".language__body").on("click", function (e) {
    const langEl = e.target.closest(".lang-el");
    $(".language__open").html(langEl.innerHTML);
    $(this).slideToggle(400);
  });

  // ______________________________nav-togler_________________________________

  // ___________________file-input_____________________
  // const fileInput = document.getElementById("fileInput");
  // const fileName = document.querySelector(".file-name");
  // const fileLabel = document.querySelector(".custom-file-label");

  // // Fayl tanlanganida nomini yangilash
  // $(fileInput).on("change", function () {
  //   if (fileInput.files.length > 0) {
  //     fileName.textContent = fileInput.files[0].name;
  //   } else {
  //     fileName.textContent = "Прикрепить файл";
  //   }
  // });

  // $(".phone-format").inputmask({
  //   mask: "+998 (99) 999-99-99",
  // });

  $(".form_tel").inputmask("+\\9\\98 99 999 99 99");

  // $("#fullpage").fullpage();

  // let rellax = new Rellax(".rellax");
});
