import { renderRowsInTable } from "./renderRowsInTable.js";
import { addOptionsIntoSelectElement } from "./addOptionsIntoSelect.js";
// import { addCarsToLocalStorage } from "./addCarsToLocalStorage.js";

export const cars = (function () {
  const cars = [
    {
      id: 0,
      brand: "ford",
      model: "mustang",
      year: "1890",
    },
    {
      id: 1,
      brand: "opel",
      model: "insignia",
      year: "2019",
    },
    {
      id: 2,
      brand: "audi",
      model: "a3",
      year: "1990",
    },
    {
      id: 3,
      brand: "ford",
      model: "mondeo",
      year: "2005",
    },
    {
      id: 4,
      brand: "ferrari",
      model: "california",
      year: "2020",
    },
    {
      id: 5,
      brand: "mercedes",
      model: "a-class",
      year: "2018",
    },
    {
      id: 6,
      brand: "toyota",
      model: "rav3",
      year: "2000",
    },
    {
      id: 6,
      brand: "ford",
      model: "focus",
      year: "2019",
    },
    {
      id: 7,
      brand: "opel",
      model: "vivaro",
      year: "2005",
    },
  ];

  function addCar(object) {
    const id = cars.length;
    cars.push({ id, ...object });
    console.log(cars);
    renderRowsInTable(cars);
    addOptionsIntoSelectElement(cars);
    // addCarsToLocalStorage(cars);
  }
  function removeCar(id) {
    const elementToRemove = cars.findIndex((el) => el.id === id);
    cars.splice(elementToRemove, 1);
    renderRowsInTable(cars);
    addOptionsIntoSelectElement(cars);
    // addCarsToLocalStorage(cars);
  }
  function sort(viaWhat, direction) {
    cars.sort((car1, car2) => {
      if (direction === "vertical_align_bottom") {
        return car1[`${viaWhat}`] < car2[`${viaWhat}`] ? 1 : -1;
      }
      if (direction === "vertical_align_top") {
        return car1[`${viaWhat}`] > car2[`${viaWhat}`] ? 1 : -1;
      }
    });
    renderRowsInTable(cars);
    addOptionsIntoSelectElement(cars);
    // addCarsToLocalStorage(cars);
  }
  function findModel(string) {
    const filteredCars = cars.filter((car) =>
      car.model.includes(string.toLowerCase())
    );
    renderRowsInTable(filteredCars);
  }
  function changeCar(newCar, carId) {
    const carIndex = cars.findIndex((car) => car.id === +carId);
    cars[carIndex] = { ...cars[carIndex], id: +carId, ...newCar };
    addOptionsIntoSelectElement(cars);
    renderRowsInTable(cars);
    // addCarsToLocalStorage(cars);
  }

  return { addCar, removeCar, sort, findModel, changeCar, cars };
})();
