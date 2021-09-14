import { cars } from "./cars.js";

export const addDeleteActionForButton = function (button) {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    cars.removeCar(+id);
  });
};
