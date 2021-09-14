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
  if (isChangeModal) cars.changeCar(newCar, carId);
  if (!isChangeModal) cars.addCar(newCar);
});

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

  // fill inputs by the selected car-data
  carId = event.target.value;
  const car = cars.cars.find((car) => car.id === +carId);
  brandInput.value = car.brand;
  modelInput.value = car.model;
  yearInput.value = car.year;
});
