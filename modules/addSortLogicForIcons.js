import { cars } from "./cars.js";

export const addSortLogicForIcons = function () {
  const icons = document.querySelectorAll(".material-icons");

  icons.forEach((el) => {
    el.addEventListener("click", (event) => {
      const sortVia = event.target.dataset.sort;

      // change onto initial icon ("sort")
      icons.forEach((icon) => {
        if (icon.dataset.sort !== event.target.dataset.sort) {
          icon.textContent = "sort";
        }
      });
      //

      if (el.textContent === "sort") {
        el.textContent = "vertical_align_bottom";
        cars.sort(sortVia, "vertical_align_bottom");
        return;
      }
      if (el.textContent === "vertical_align_bottom") {
        el.textContent = "vertical_align_top";
        cars.sort(sortVia, "vertical_align_top");
        return;
      }
      if (el.textContent === "vertical_align_top") {
        el.textContent = "vertical_align_bottom";
        cars.sort(sortVia, "vertical_align_bottom");
        return;
      }
    });
  });
};
