

import Swiper, { EffectCoverflow, Pagination} from "swiper";

import "swiper/css/bundle";

const swiperCategories = () => {
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    modules: [EffectCoverflow, Pagination],
    coverflowEffect: {
      rotate: 50,
      centeredSlides: true,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  return swiper;
};

window.addEventListener("DOMContentLoaded", swiperCategories);
