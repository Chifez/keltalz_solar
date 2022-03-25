"use strict";
let slideEl = document.querySelectorAll(".slides");
let prevArrowsEl = document.querySelector(".left_arrow");
let nextArrowsEl = document.querySelector(".right_arrow");
let arrow = [prevArrowsEl, nextArrowsEl];
let mainBody = document.querySelectorAll(".main_body");
let textBody = document.querySelector(".text_body");
let contentBody = document.querySelectorAll(".content_body");
let index = 0;

let offset = {
  threshold: 0.5,
};

// SETTING UP THE IMAGE SLIDER ANIMATION
const init = (n) => {
  slideEl.forEach((slide) => {
    slide.style.display = "none";
  });
  slideEl[n].style.display = "flex";
};

document.addEventListener("DOMContentLoaded", init(index));

arrow.forEach((arrows) => {
  arrows.addEventListener("click", (e) => {
    if (e.target == arrow[0]) {
      index <= 0 ? (index = slideEl.length - 1) : index--;
      init(index);
      slideEl[index].classList.remove("next");
      slideEl[index].classList.add("prev");
    } else if (e.target == arrow[1]) {
      index >= slideEl.length - 1 ? (index = 0) : index++;
      init(index);
      slideEl[index].classList.remove("prev");
      slideEl[index].classList.add("next");
    }
  });
});

// prevArrowsEl.addEventListener("click", () => {
//   index <= 0 ? (index = slideEl.length - 1) : index--;
//   init(index);
//   slideEl[index].classList.remove("next");
//   slideEl[index].classList.add("prev");
// });

// *****END OF IMAGE SLIDER ANIMATION*****

// ******SETTING THE SLIDE UP ANIMATION*****
function fade() {
  mainBody.forEach((main) => {
    main.style.opacity = 0;
  });
  contentBody.forEach((content) => {
    content.style.opacity = 0;
  });
  textBody.style.opacity = 0;
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      fade();
    } else {
      entry.target.classList.add("main_anime");
      appearOnScroll.unobserve(entry.target);
      entry.target.style.opacity = 1;
    }
  });
},
offset);

const slideUpOnScroll = new IntersectionObserver(function (
  entries,
  slideUpOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      fade();
    } else {
      entry.target.classList.add("content_anime");
      slideUpOnScroll.unobserve(entry.target);
      entry.target.style.opacity = 1;
    }
  });
},
offset);

const textOnScroll = new IntersectionObserver(function (entries, textOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      fade();
    } else {
      entry.target.classList.add("text_anime");
      textOnScroll.unobserve(entry.target);
      entry.target.style.opacity = 1;
    }
  });
}, offset);
mainBody.forEach((main) => {
  appearOnScroll.observe(main);
});

contentBody.forEach((content) => {
  slideUpOnScroll.observe(content);
});

textOnScroll.observe(textBody);
