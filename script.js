/* Header Nav */

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});


/* Arrows that appear and disappear on service page cards */

document.addEventListener('DOMContentLoaded', () => {
  let cards = document.querySelectorAll('.card');

  const hideArrow = (arrowIcon) => arrowIcon.classList.add('hide-arrow');
  const showArrow = (arrowIcon) => arrowIcon.classList.remove('hide-arrow');

  cards.forEach(card => {
      let arrowIcon = card.querySelector('.arrow-icon');

      card.addEventListener('click', e => {
          e.stopPropagation();
          hideArrow(arrowIcon);
      });

      card.addEventListener('mouseover', () => hideArrow(arrowIcon));
      card.addEventListener('mouseout', () => showArrow(arrowIcon));
  });

  document.addEventListener('click', () => {
      cards.forEach(card => {
          let arrowIcon = card.querySelector('.arrow-icon');
          showArrow(arrowIcon);
      });
  });
});

