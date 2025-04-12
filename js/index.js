"use strict";

// ---------------------toggle header lang list -------------------------

const toggleLangButton = document.querySelector(".lang__toggle");
const langMenu = document.querySelector(".lang__menu");
const langItems = Array.from(document.querySelectorAll(".lang__item"));
const currentLang = document.querySelector(".lang__current");

const links = (currentLang.innerHTML = langItems[0].textContent);
toggleLangButton.addEventListener("click", function () {
  const isExpanded = toggleLangButton.getAttribute("aria-expanded") === "true";
  toggleLangButton.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    langMenu.style.display = "none";
  } else {
    langMenu.style.display = "block";
  }
});

// ---------------------------toggle extras cards style ------------------------

const extrasList = document.querySelector(".extras__list");
const toggleExtras = (e) => {
  const btn = e.target.closest(".extras__btn");
  if (!btn) return;
  const img = btn.querySelector("img");
  const listItem = btn.closest(".extras__item");
  btn.classList.toggle("extras__btn--selected");
  listItem.classList.toggle("extras__item--active");
  let imgSrc = img.src;
  let splitedImgSrc = imgSrc.split("/");
  if (splitedImgSrc.at(-1) === "minus.svg") {
    splitedImgSrc.pop();
    splitedImgSrc.push("plus.svg");
  } else {
    splitedImgSrc.pop();
    img.src = splitedImgSrc.push("minus.svg");
  }
  img.src = splitedImgSrc.join("/");
};
extrasList.addEventListener("click", toggleExtras);

// ----------------------------------progress bar ----------------------------

const changeProgressBar = (e) => {
  const progressStep1 = document.querySelector("#progress-step-1");
  const progressStep2 = document.querySelector("#progress-step-2");
  const progressStep3 = document.querySelector("#progress-step-3");

  if (e.target.closest("#first-step")) {
    const carInfo = document.querySelector(".car-info");
    const carInfoWrap = document.querySelector(".car-info__wrap");
    const extras = document.querySelector(".extras");
    const progressBar = document.querySelector(".car-info__progress");

    carInfoWrap.style.display = "none";
    extras.style.display = "block";
    progressBar.style.display = "flex";
    e.target.style.display = "none";
    progressStep1.classList.add("active");
    carInfo.style.padding = "0";
  }

  if (e.target.closest("#second-step")) {
    const insurance = document.querySelector(".insurance");
    const extras = document.querySelector(".extras");

    extras.style.display = "none";
    insurance.style.display = "block";
    progressStep1.classList.add("completed");
    progressStep1.classList.remove("active");
    progressStep2.classList.add("active");
  }

  if (e.target.closest("#third-step")) {
    const progressBar = document.querySelector(".car-info__progress");
    const insurance = document.querySelector(".insurance");
    const confirming = document.querySelector(".confirming");
    const progressInfo = document.querySelector(".progress__info");

    insurance.style.display = "none";
    confirming.style.display = "block";
    progressStep2.classList.add("completed");
    progressStep2.classList.remove("active");
    progressStep3.classList.add("active");
    progressInfo.style.display = "none";
    progressBar.style.paddingBottom = "32px";
  }
};

document.body.addEventListener("click", changeProgressBar);
