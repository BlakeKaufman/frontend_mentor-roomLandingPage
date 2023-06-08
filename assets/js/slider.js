"use strict";
const slider_container = document.querySelector(".slider");

const sliderContent = [
  {
    img: "./assets/images/desktop-image-hero-1.jpg",
    alt: "table with chairs and a tree on top of the table",
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners
    across the country. Our experts combine form and function in bringing
    your vision to life. Create a room in your own style with our
    collection and make your property a reflection of you and what you
    love.`,
  },
  {
    img: "./assets/images/desktop-image-hero-2.jpg",
    alt: "Three differnt colored chairs showing off our selection",
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your
    home or place of business. Locally, we’re in most major cities throughout
    the country. Find the branch nearest you using our store locator. Any
    questions? Don't hesitate to contact us today.`,
  },
  {
    img: "./assets/images/desktop-image-hero-3.jpg",
    alt: "Dark black chairn in a dark room",
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has
    invested in advanced technology to ensure that every product is made as
    perfect and as consistent as possible. With three decades of experience in
    this industry, we understand what customers want for their home and office.`,
  },
];

let sliderPos = 0;
function changeScreen() {
  const currentSlide = sliderContent[sliderPos];
  slider_container.style.opacity = "0";
  let html = `
  <div class="background_img">
        <img
          src="${currentSlide.img}"
          alt="${currentSlide.alt}"
          srcset=""
        />
      </div>
      <div class="text_content">
        <h1>${currentSlide.title}</h1>
        <p>
         ${currentSlide.description}
        </p>
        <div class="CTA_button">
          <span>Shop Now</span>
          <img
            src="./assets/images/icon-arrow.svg"
            alt="arrow pointing right"
            srcset=""
          />
        </div>
        <div class="move_slider_BTNS">
          <div class="slider_option left">
            <img
              src="./assets/images/icon-angle-left.svg"
              alt="angle left to switch slider"
              srcset=""
            />
          </div>
          <div class="slider_option right">
            <img
              src="./assets/images/icon-angle-right.svg"
              alt="angle right to switch slider"
              srcset=""
            />
          </div>
        </div>
      </div>
  `;

  setTimeout(() => {
    slider_container.innerHTML = "";
    slider_container.insertAdjacentHTML("beforeend", html);
    initSliderOptions();
    slider_container.style.opacity = "1";
  }, 1000);
}

function switchSlide(event) {
  const targetEvent =
    event.srcElement.localName === "img"
      ? event.target.parentElement
      : event.target; // makes sure wheather you click on img or not you get the container div containg the slider direction

  if (targetEvent.classList.contains("right")) {
    if (sliderPos >= 2) return;
    sliderPos++;
    changeScreen();
  } else if (targetEvent.classList.contains("left")) {
    if (sliderPos <= 0) return;
    sliderPos--;
    changeScreen();
  }
}

function initSliderOptions() {
  const slider_buttons_container = document.querySelector(".move_slider_BTNS");
  slider_buttons_container.addEventListener("click", switchSlide);
}

initSliderOptions();
