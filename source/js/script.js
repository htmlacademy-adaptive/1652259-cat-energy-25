const mainNav = document.querySelector(".main-nav");
const navToggle = mainNav.querySelector(".main-nav__toggle");
const slider = document.querySelector(".slider");
const prevSlidButton = document.querySelector(".slider__button--prev");
const nextSlidButton = document.querySelector(".slider__button--next");
const beforeImage = document.querySelector(".slider__item--before");
const afterImage = document.querySelector(".slider__item--after");
const sliderControls = document.querySelectorAll(".slider__control");
const noScriptElements = document.querySelectorAll(".no-js");

const activateScripts = () => {
  noScriptElements.forEach((element) => element.classList.remove("no-js"));
};

const changeMenuClass = () => {
  mainNav.classList.remove("main-nav--opened");
  mainNav.classList.add("main-nav--closed");
};

const openCloseMenu = () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
};

const hideSlide = (slide) => {
  if (slide) {
    slide.classList.add("hidden");
  }
};

const moveSliderControl = () => {
  sliderControls.forEach((control) => {
    if (afterImage.classList.contains("hidden")) {
      control.classList.add("slider__control--before");
      control.classList.remove("slider__control--after");
    } else {
      control.classList.add("slider__control--after");
      control.classList.remove("slider__control--before");
    }
  });
};

const showPrevSlide = () => {
  if (beforeImage.classList.contains("hidden")) {
    beforeImage.classList.remove("hidden");
    afterImage.classList.add("hidden");
    moveSliderControl();
  }
};

const showNextSlide = () => {
  if (afterImage.classList.contains("hidden")) {
    afterImage.classList.remove("hidden");
    beforeImage.classList.add("hidden");
    moveSliderControl();
  }
};

const activateSlider = () => {
  if (slider && beforeImage && afterImage) {
    hideSlide(afterImage);
    prevSlidButton.addEventListener("click", showPrevSlide);
    nextSlidButton.addEventListener("click", showNextSlide);
  }
};

activateScripts();
changeMenuClass();
navToggle.addEventListener("click", openCloseMenu);
activateSlider();
