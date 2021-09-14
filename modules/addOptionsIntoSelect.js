export const addOptionsIntoSelectElement = function (cars) {
  const selectElement = document.querySelector(".form-select");
  const options = document.querySelectorAll("option");

  /// remove option elements from select element and add first option
  options.forEach((option) => option.remove());
  const firstOption = document.createElement("option");
  firstOption.setAttribute("selected", "");
  firstOption.textContent = "choose model to change";
  selectElement.append(firstOption);
  ///////////////////////////////////////////////////////////////////

  cars.forEach((car) => {
    const option = document.createElement("option");
    option.setAttribute("value", `${car.id}`);
    option.textContent = `${car.brand} - ${car.model} - ${car.year}`;
    selectElement.append(option);
  });
};
