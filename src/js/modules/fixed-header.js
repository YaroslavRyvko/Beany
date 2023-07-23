export function initFixedHeader() {
  window.onscroll = function () {
    showOnScroll();
  };

  let header = document.querySelector(".header");
  let fixed = header.offsetTop;

  function showOnScroll() {
    if (window.pageYOffset > fixed + header.offsetHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  let menu_btn = document.querySelector(".header__burger-btn");
  let close_btn = document.querySelector(".header__close-btn");
  let mask = document.querySelector(".mask");
  let body = document.querySelector("body");

  menu_btn.addEventListener("click", toggleNav);
  close_btn.addEventListener("click", toggleNav);
  mask.addEventListener("click", toggleNav);

  function toggleNav() {
    header_navigation_mobile.classList.toggle("active");
    mask.classList.toggle("active");
    body.classList.toggle("scroll-disabled");
    hideSubMenus();
  }

  let header_navigation_mobile = document.querySelector(
    ".header__navigation-mobile"
  );
  
  let subMenus = header_navigation_mobile.querySelectorAll(
    ".menu-item.has-dropdown"
  );

  subMenus.forEach((el) => {
    el.addEventListener("click", () => {
      hideSubMenus();
      el.querySelector(".sub-menu").classList.add("active");
      console.log("true");
    });

    el.querySelector(".sub-menu__back-link").addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        hideSubMenus();
      }
    );
  });

  function hideSubMenus() {
    subMenus.forEach((el) => {
      el.querySelector(".sub-menu").classList.remove("active");
    });
  }
}
