export function initAccordion() {
  let accordions = document.querySelectorAll(".accordion");

  if (!accordions) return;

  accordions.forEach((el) => {
    let btns = el.querySelectorAll(".accordion-btn");

    btns.forEach((item) => {
      item.addEventListener("click", function () {
        let arr = Array.from(btns);
        arr.splice(arr.indexOf(this), 1);

        arr.forEach((item) => {
          item.classList.remove("active");
          let panel = item.nextElementSibling;
          panel.style.maxHeight = null;
        });

        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });
}
