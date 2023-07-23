import Swiper, { Navigation, Scrollbar } from "swiper";

export function initTestimonialsSwiper() {
  const testimonials = document.querySelectorAll(
    ".testimonials-section__swiper"
  );
  if (!testimonials) return;

  window.onload = function () {
    testimonials.forEach((el) => {
      const slider = el.querySelector(".swiper");
      const sliderScroll = el.querySelector(".testimonials-section__scrollbar");

      const swiper = new Swiper(slider, {
        modules: [Navigation, Scrollbar],
        autoHeight: true,
        spaceBetween: 10,
        init: false,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1.1,
          },
          460: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          881: {
            slidesPerView: 1.6,
            spaceBetween: 0,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },
        scrollbar: {
          el: sliderScroll,
          draggable: true,
        },
      });

      swiper.init();
    });
  };
}
