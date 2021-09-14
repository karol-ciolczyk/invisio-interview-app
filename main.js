import { cars } from "./modules/cars.js";

cars.addCar({
  brand: "ferrari",
  model: "california",
  year: "2020",
});

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
let newCar = {};

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    const key = event.target.id;
    const value = event.target.value;

    newCar = {
      ...newCar,
      [key]: value,
    };
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(newCar);

  cars.addCar(newCar);
});

//////// change sort icon, invoce sort method ////////
const icons = document.querySelectorAll(".material-icons");

icons.forEach((el) => {
  el.addEventListener("click", (event) => {
    const sortVia = event.target.dataset.sort;

    // change to initial icon: sort-icon
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
//////// change sort icon, invoce sort method - END - ////////

const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  cars.findModel(inputValue);
});
