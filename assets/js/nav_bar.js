"use strict";
const nav_bar_background = document.querySelector(".navbar_background");
const navBar = document.getElementById("nav");
const hamburgerIcon = document.querySelector(".nav_menu");
const mobileNavOptions = document.querySelector(".mobile-nav-options");

function navBackground() {
  if (window.pageYOffset > 100) {
    nav_bar_background.style.height = "100%";
  } else {
    nav_bar_background.style.height = "0%";
  }
}

function showMobileNav(event) {
  const targetEvent =
    event.srcElement.localName === "img"
      ? event.target.parentElement
      : event.target;
  console.log(targetEvent);
  if (targetEvent.classList.contains("nav_menu")) {
    mobileNavOptions.style.transform = "translateX(0)";
  } else if (targetEvent.classList.contains("close_mobile_nav")) {
    mobileNavOptions.style.transform = "translateX(100%)";
  }
}

window.addEventListener("scroll", navBackground);
navBackground();

navBar.addEventListener("click", showMobileNav);
