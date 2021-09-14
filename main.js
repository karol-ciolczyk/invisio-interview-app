import { cars } from "./modules/cars.js";
import { addSortLogicForIcons } from "./modules/addSortLogicForIcons.js";
// import { addOptionsIntoSelectElement } from "./modules/addOptionsIntoSelect.js";

addSortLogicForIcons();

// addOptionsIntoSelectElement(cars.cars);

cars.addCar({
  brand: "ferrari",
  model: "california",
  year: "2020",
});

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
let newCar = {};
let carId = {};

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
  const selectElement = document.querySelector(".form-select");
  const isChangeModal = selectElement.style.display === "block";
  event.preventDefault();
  console.log(newCar);
  if (isChangeModal) cars.changeCar(newCar, carId);
  if (!isChangeModal) cars.addCar(newCar);
});

//////// change sort icon, invoce sort method ////////
// const icons = document.querySelectorAll(".material-icons");

// icons.forEach((el) => {
//   el.addEventListener("click", (event) => {
//     const sortVia = event.target.dataset.sort;

//     // change onto initial icon ("sort")
//     icons.forEach((icon) => {
//       if (icon.dataset.sort !== event.target.dataset.sort) {
//         icon.textContent = "sort";
//       }
//     });
//     //

//     if (el.textContent === "sort") {
//       el.textContent = "vertical_align_bottom";
//       cars.sort(sortVia, "vertical_align_bottom");
//       return;
//     }
//     if (el.textContent === "vertical_align_bottom") {
//       el.textContent = "vertical_align_top";
//       cars.sort(sortVia, "vertical_align_top");
//       return;
//     }
//     if (el.textContent === "vertical_align_top") {
//       el.textContent = "vertical_align_bottom";
//       cars.sort(sortVia, "vertical_align_bottom");
//       return;
//     }
//   });
// });
//////// change sort icon, invoce sort method - END - ////////

//////// searching for particular model of car ////////////
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  cars.findModel(inputValue);
});
//////// searching for particular model of car - END - ////////////

const selectElement = document.querySelector(".form-select");
let exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  let button = event.relatedTarget;
  // console.log(button);
  // Extract info from data-bs-* attributes
  let recipient = button.dataset.action;
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  if (recipient === "Change") selectElement.style.display = "block";
  if (recipient === "Add New") selectElement.style.display = "none";
  // Update the modal's content.
  let modalTitle = exampleModal.querySelector(".modal-title");

  if (recipient) modalTitle.textContent = recipient + " Car";
});

selectElement.addEventListener("change", (event) => {
  carId = event.target.value;
});
