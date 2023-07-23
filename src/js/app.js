import '../scss/main.scss';
import { initAccordion } from './modules/accordion';
import { initTestimonialsSwiper } from './modules/testimonials-swiper';
import { initArticlesSwiper } from './modules/articles-swiper';
import { initFixedHeader } from './modules/fixed-header';
import { initGetDay } from './modules/getDay';
import { initCookies } from './modules/cookies';

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initTestimonialsSwiper();
  initArticlesSwiper();
  initFixedHeader();
  initGetDay();
  initCookies();
})