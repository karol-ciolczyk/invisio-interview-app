export const addCarsToLocalStorage = function (cars) {
  localStorage.setItem("cars", JSON.stringify(cars));
};
