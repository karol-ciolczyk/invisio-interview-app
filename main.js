import { cars } from "./modules/cars.js";
import { addSortLogicForIcons } from "./modules/addSortLogicForIcons.js";
import { renderRowsInTable } from "./modules/renderRowsInTable.js";
import { addOptionsIntoSelectElement } from "./modules/addOptionsIntoSelect.js";

//// a first render of table content ////
renderRowsInTable(cars.cars);

//// add sort icons functionality ////
addSortLogicForIcons();

//// add options to html-select-element ////
addOptionsIntoSelectElement(cars.cars);

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
let newCar = {};
let carId = {};

//// inputs listener to collect car data - change an existing or add a new car
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

//// form submits new car or change existing car
form.addEventListener("submit", (event) => {
  const selectElement = document.querySelector(".form-select");
  const isChangeModal = selectElement.style.display === "block";
  event.preventDefault();
  if (isChangeModal) cars.changeCar(newCar, carId);
  if (!isChangeModal) cars.addCar(newCar);

  form.reset();
});

//////// searching for particular model of car ////////////
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  cars.findModel(inputValue);
});

//// different modal content depending on which button was clicked
const selectElement = document.querySelector(".form-select");
let exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  let button = event.relatedTarget;
  let recipient = button.dataset.action;

  if (recipient === "Change") selectElement.style.display = "block";
  if (recipient === "Add New") selectElement.style.display = "none";
  // Update the modal's content.
  let modalTitle = exampleModal.querySelector(".modal-title");
  if (recipient) modalTitle.textContent = recipient + " Car";
});

//// add listener onChange + add initial form value after a car selecting ////
selectElement.addEventListener("change", (event) => {
  const brandInput = document.querySelector("#brand");
  const modelInput = document.querySelector("#model");
  const yearInput = document.querySelector("#year");

  // initial state when first option selected
  const isInitialState = event.target.value === "- select car to change data -";

  // fill inputs by the selected car-data or clear data
  carId = event.target.value;
  const car = cars.cars.find((car) => car.id === +carId);
  brandInput.value = isInitialState ? "" : car.brand;
  modelInput.value = isInitialState ? "" : car.model;
  yearInput.value = isInitialState ? "" : car.year;
});
