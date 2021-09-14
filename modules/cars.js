import { renderRowsInTable } from "./renderRowsInTable.js";
import { removeRows } from "./removeRows.js";

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
      brand: "mclaren",
      model: "01",
      year: "2000",
    },
    {
      id: 2,
      brand: "audi",
      model: "a3",
      year: "1990",
    },
    {
      id: 3,
      brand: "tarpan",
      model: "tar-33",
      year: "1877",
    },
  ];

  function addCar(object) {
    const id = cars.length;
    cars.push({ id, ...object });
    console.log(cars);
    removeRows();
    renderRowsInTable(cars);
  }
  function removeCar(id) {
    const elementToRemove = cars.findIndex((el) => el.id === id);
    cars.splice(elementToRemove, 1);
    removeRows();
    renderRowsInTable(cars);
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
    removeRows();
    renderRowsInTable(cars);
  }
  function findModel(string) {
    const filteredCars = cars.filter((car) => car.model.includes(string));
    removeRows();
    renderRowsInTable(filteredCars);
  }

  return { addCar, removeCar, sort, findModel };
})();
