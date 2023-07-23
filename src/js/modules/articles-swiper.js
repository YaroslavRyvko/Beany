import Swiper, { Navigation, Scrollbar } from "swiper";

export function initArticlesSwiper() {
  const articles = document.querySelectorAll(".articles-section__swiper");
  if (!articles) return;

  articles.forEach((el) => {
    const slider = el.querySelector(".swiper");
    const sliderScroll = el.querySelector(".articles-section__scrollbar");

    const swiper = new Swiper(slider, {
      modules: [Navigation, Scrollbar],
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.05,
        },
        460: {
          spaceBetween: 20,
          slidesPerView: 1.5,
        },
        640: {
          spaceBetween: 20,
          slidesPerView: 2.1,
        },
        880: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
      scrollbar: {
        el: sliderScroll,
        draggable: true,
      },
    });

    swiper.init();
  });
}
