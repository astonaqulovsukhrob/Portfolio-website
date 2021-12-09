const searchBtn = document.getElementById("search-btn");
const searchBar = document.querySelector(".search-bar_container");
const formBtn = document.getElementById("login-btn");
const loginForm = document.querySelector(".login-form-container");
const formClose = document.getElementById("form-close");
const videoBnt = document.querySelectorAll(".vid-btn");
const progressBar = document.querySelector("#progress-bar");

// menu bar
const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  loginForm.classList.remove("active");
  menuBar.classList.remove("active");
  navbar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// menu bar
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});

// vidBtn
videoBnt.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.getElementById("video-slider").src = src;
  });
});

const main = document.querySelector("main");

const animateProgressBar = () => {
  let sceollDistance = -main.getBoundingClientRect().top;
  let progressWidth =
    (sceollDistance /
      (main.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  const value = Math.floor(progressWidth);
  progressBar.style.width = value + "%";
};

window.addEventListener("scroll", animateProgressBar);

var swiper = new Swiper(".review-slider", {
  spaceBetwwen: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidePerView: 1,
    },
    768: {
      slidePerView: 2,
    },
    1024: {
      slidePerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
