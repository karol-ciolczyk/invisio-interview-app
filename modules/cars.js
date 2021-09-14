import { renderRowsInTable } from "./renderRowsInTable.js";
import { removeRows } from "./removeRows.js";

export const cars = (function () {
  const cars = [
    {
      brand: "ford",
      model: "mustang",
      year: "1890",
    },
  ];

  function addCar(object) {
    cars.push(object);
    // console.log(cars);
    removeRows();
    renderRowsInTable(cars);
  }
  function removeCar() {
    cars.pop();
    // console.log(cars);
    renderRowsInTable(cars);
  }
  function sort(viaWhat, direction) {
    cars.sort((car1, car2) => {
      if (viaWhat === "brand") {
        if (direction === "vertical_align_bottom") {
          return car1.brand < car2.brand ? 1 : -1;
        }
        if (direction === "vertical_align_top") {
          return car1.brand > car2.brand ? 1 : -1;
        }
      }
      if (viaWhat === "model") {
        if (direction === "vertical_align_bottom") {
          return car1.model < car2.model ? 1 : -1;
        }
        if (direction === "vertical_align_top") {
          return car1.model > car2.model ? 1 : -1;
        }
      }
      if (viaWhat === "year") {
        if (direction === "vertical_align_bottom") {
          return car1.year < car2.year ? 1 : -1;
        }
        if (direction === "vertical_align_top") {
          return car1.year > car2.year ? 1 : -1;
        }
      }

      // if (viaWhat === "model") return car1.model > car2.model ? 1 : -1;
      // if (viaWhat === "year") return car1.year > car2.year ? 1 : -1;
    });
    // console.log(cars);
    removeRows();
    renderRowsInTable(cars);
  }

  return { addCar, removeCar, sort };
})();
