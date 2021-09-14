///// change sort icon /////

const icon = document.querySelectorAll(".material-icons");

icon.forEach((el) => {
  el.addEventListener("click", (event) => {
    const incons = [
      "sort",
      "shuffle",
      "vertical_align_bottom",
      "vertical_align_top",
    ];

    if (el.textContent === "sort") {
      el.textContent = "vertical_align_bottom";
      return;
    }
    if (el.textContent === "vertical_align_bottom") {
      el.textContent = "vertical_align_top";
      return;
    }
    if (el.textContent === "vertical_align_top") {
      el.textContent = "shuffle";
      return;
    }
    if (el.textContent === "shuffle") {
      el.textContent = "vertical_align_bottom";
      return;
    }
  });
});
