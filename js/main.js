$(window).on("load", function (event) {
  $(".loadingBx").delay(500).fadeOut(300);
});
//Add class anmate + wow js
$(document).ready(function () {
  $(".category").addClass("wow animate__zoomIn animate__delay-0.9s");
  $(".product-item").addClass("wow animate__flipInY");
  $(".about-us__content").addClass("animate__delay-2s");
  $(".blog-item").addClass("wow animate__fadeInUp animate__delay-0.6s");
  $(".blog-right-sidebar").addClass("wow animate__zoomIn animate__delay-0.6s");
  $(".gl-image:odd").addClass("wow animate__flipInY animate__delay-0.8s");
  $(".gl-image:even").addClass("wow animate__flipInX animate__delay-0.8s");
  $(".contact").addClass("wow animate__zoomIn animate__delay-0.8s");
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});

$(document).ready(function () {
  // Go-To-Top
  $("#gototop").hide(); // ẩn nút go-to-top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
      $("#gototop").fadeIn(300); //Xuất hiện nút
    } else {
      $("#gototop").fadeOut(300); //Ngược lại thì ẩn nút
    }
  });
  $("#gototop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    ); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
  });

  // Slider
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025, // Độ rộng thiết bị
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Ẩn nút kéo
          infinite: false, // Kéo tới cuối không kéo dc nữa
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

//   Padding header when scroll
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) $(".header").addClass("header-padding");
    else $(".header").removeClass("header-padding");
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100)
      $(".header__sort-bar").addClass("header__sort-bar-top");
    else $(".header__sort-bar").removeClass("header__sort-bar-top");
  });
});

/*------------------------------------------
          Modal-Form-Đăng-Ký
-------------------------------------------- */
const form_pc_1 = document.querySelector(".js-form-sign-up");
const form_pc_2 = document.querySelector(".js-form-sign-in");
const form_tablet_mobile_1 = document.querySelector(
  ".js-form-sign-up-mobile-tablet"
);
const form_tablet_mobile_2 = document.querySelector(
  ".js-form-sign-in-mobile-tablet"
);
const modalSignUp = document.querySelector(".js-modal-sign-up");
const modalSignIn = document.querySelector(".js-modal-sign-in");
const modalContainerSignUp = document.querySelector("#form-1");
const modalContainerSignIn = document.querySelector("#form-2");

// Hàm hiến thị modal (thêm class open vào modal)
function showFromSignUp() {
  modalSignUp.classList.add("open");
}

function showFromSignIn() {
  modalSignIn.classList.add("open");
}

// Hàm ấn modal (gỡ bỏ class open của modal)
function hideFromSignUp() {
  modalSignUp.classList.remove("open");
}

function hideFromSignIn() {
  modalSignIn.classList.remove("open");
}

//Nghe hành vi click
form_pc_1.addEventListener("click", showFromSignUp);
form_pc_2.addEventListener("click", showFromSignIn);
form_tablet_mobile_1.addEventListener("click", showFromSignUp);
form_tablet_mobile_2.addEventListener("click", showFromSignIn);

modalSignUp.addEventListener("click", hideFromSignUp);
modalSignIn.addEventListener("click", hideFromSignIn);

modalContainerSignUp.addEventListener("click", function (event) {
  event.stopPropagation();
});
modalContainerSignIn.addEventListener("click", function (event) {
  event.stopPropagation();
});

/*------------------------------------------
             See More Product
-------------------------------------------- */
var moreBtn = document.querySelector(".js-see-more");
var moreSeeProduct = document.querySelectorAll(".product-more");
var count = 0;
moreBtn.addEventListener("click", function showMore() {
  for (let i = 0; i < 4; i++) moreSeeProduct[count++].style.display = "block";
  if (count == moreSeeProduct.length) moreBtn.style.display = "none";
});

// Search
function searching() {
  var check = document.getElementById("search");
  if (check.value != "") {
    swal({
      title: "Xin lỗi !",
      text: "Tính năng chưa được phát triển, vui lòng thử lại sau !",
      icon: "info",
    });
  } else swal("Xảy ra lỗi !", "Bạn chưa nhập thông tin", "error");
}
