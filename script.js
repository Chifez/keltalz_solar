"use strict";
const slideEl = document.querySelectorAll(".slides");
const prevArrowsEl = document.querySelector(".left_arrow");
const nextArrowsEl = document.querySelector(".right_arrow");
const arrow = [prevArrowsEl, nextArrowsEl];
const mainBody = document.querySelectorAll(".main_body");
const contentBody = document.querySelectorAll(".content_body");
const textBody = document.querySelector(".text_body");
const textDetail = document.querySelectorAll(".about_main p");
const serviceDtEl = document.querySelectorAll("#our_services .contents_body");
let index = 0;

const offset = {
  threshold: 0.5,
};
const reveal = {
  threshold: 0.9,
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

// *****END OF IMAGE SLIDER ANIMATION*****

// ******SETTING THE REVEAL ON SCROLL ANIMATION*****

function fade() {
  mainBody.forEach((main) => {
    main.style.opacity = 0;
  });
  contentBody.forEach((content) => {
    content.style.opacity = 0;
  });
  textDetail.forEach((text) => {
    text.style.opacity = 0;
  });

  // textBody.style.opacity = 0;
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

function animateText() {
  for (let i = 0; i < textDetail.length; i++) {
    textDetail[i].style.animationDuration = `${i > 0 ? 1.6 : 1.55}s`;
  }
}

const textOnScroll = new IntersectionObserver(function (entries, textOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      fade();
    } else {
      entry.target.classList.add("text_anime");
      textOnScroll.unobserve(entry.target);
      entry.target.style.opacity = 1;

      animateText();
    }
  });
}, offset);

mainBody.forEach((main) => {
  appearOnScroll.observe(main);
});

contentBody.forEach((content) => {
  slideUpOnScroll.observe(content);
});
textDetail.forEach((text) => {
  textOnScroll.observe(text);
});

function animate() {
  for (let i = 0; i < serviceDtEl.length; i++) {
    serviceDtEl[i].style.animationDuration = `${
      i > 0 ? (i == 1 ? 1.2 : 1.5) : 1
    }s`;
  }
}
const showUpOnScroll = new IntersectionObserver(function (
  entries,
  showUpOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.style.opacity = 0;
    } else {
      showUpOnScroll.unobserve(entry.target);
      entry.target.classList.add("content");
      entry.target.style.opacity = 1;
      animate();
    }
  });
},
reveal);

serviceDtEl.forEach((main) => {
  showUpOnScroll.observe(main);
});
/* END OF THE REVEAL ON SCROLL ANIMATION */
const emailReg = document.querySelector(".register");
const regBtn = document.querySelector(".email_btn");
const submit = (e) => {
  e.preventDefault();
  let text = emailReg.value;
  if (text === "") {
    return;
  } else {
    window.open("mailto:keltalzglobal@gmail.com?subject=text&body=text");
  }
};
regBtn.addEventListener("click", submit);

const bookUs = document.querySelectorAll(".book_us");

const bookings = (e) => {
  console.log("cliked");
  e.preventDefault();
  window.open("mailto:keltalzglobal@gmail.com?subject=body&body=body");
};
bookUs.forEach((book) => {
  book.addEventListener("click", bookings);
});
