const nav = document.querySelector(".navbar");
const mqTab = window.matchMedia("(max-width: 1024px)");
const mqMob = window.matchMedia("(max-width: 500px)");
const burger = document.querySelector(".burger");
const links = document.querySelector(".items");
const weekDays = document.querySelector(".week-days");
const days = document.querySelectorAll(".week-days li");
const tables = document.querySelectorAll(".table");

const fixNav = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
};

const toggleLinks = () => {
  links.classList.toggle("active");
  burger.classList.toggle("toggle");
};

const classesCarousel = () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let imgContainer = document.querySelector(".classes-images");
  let count = 0;
  let amount;

  if (mqMob.matches) {
    amount = -100;
  } else if (mqTab.matches) {
    amount = -50;
  } else {
    amount = -25;
  }
  let auto = true;

  const slide = new Slide(imgContainer, count, amount);

  if (auto) {
    slide.slideInternal();
  }

  next.addEventListener("click", (e) => {
    slide.nextSlide(5);
  });
  prev.addEventListener("click", (e) => {
    slide.prevSlide(1);
  });

  imgContainer.addEventListener("transitionend", () => {
    slide.slideLoop(1, 4);
  });
};

const selectDay = (e) => {
  days.forEach((day) => {
    day.classList.remove("current");
  });
  e.target.classList.add("current");
  scheduleTable(e.target);
};
const scheduleTable = (el) => {
  tables.forEach((table) => {
    table.id !== el.dataset.day
      ? table.classList.remove("show")
      : table.classList.add("show");
    console.log(el.dataset.day, table.id);
  });
};

const servCarousel = () => {
  const slider = document.querySelector(".slide-wrap");
  const next2 = document.querySelector(".next2");
  const prev2 = document.querySelector(".prev2");
  let auto = true;
  let counter = 0;
  let percent;

  if (mqMob.matches) {
    percent = -100;
  } else if (mqTab.matches) {
    percent = -50;
  } else {
    percent = -33;
  }

  const servicesSlide = new Slide(slider, counter, percent);

  if (auto) {
    servicesSlide.slideInternal();
  }

  next2.addEventListener("click", (e) => {
    servicesSlide.nextSlide(5);
  });
  prev2.addEventListener("click", (e) => {
    servicesSlide.prevSlide(1);
  });

  slider.addEventListener("transitionend", () => {
    servicesSlide.slideLoop(1, 4);
  });
};

window.addEventListener("scroll", fixNav);
burger.addEventListener("click", toggleLinks);
classesCarousel();
weekDays.addEventListener("click", selectDay);
servCarousel();
