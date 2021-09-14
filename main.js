import { cars } from "./modules/cars.js";

console.log(cars);
cars.addCar({
  brand: "bmw",
  model: "m3",
  year: "1995",
});
cars.addCar({
  brand: "audi",
  model: "a3",
  year: "1990",
});
cars.addCar({
  brand: "tarpan",
  model: "tar-33",
  year: "1877",
});

cars.sort("brand");
cars.sort("year");

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
let newCar = {};

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    // console.log(event.target.id);
    const key = event.target.id;
    const value = event.target.value;

    newCar = {
      ...newCar,
      [key]: value,
    };

    // console.log(newCar);
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
