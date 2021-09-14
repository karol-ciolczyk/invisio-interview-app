export const addOptionsIntoSelectElement = function (cars) {
  const selectElement = document.querySelector(".form-select");
  const options = document.querySelectorAll("option");

  /// remove option elements from select element and add first option
  options.forEach((option) => option.remove());
  const firstOption = document.createElement("option");
  firstOption.setAttribute("selected", "");
  firstOption.textContent = "- select car to change data -";
  firstOption.style.color = "#b8b8b8";
  selectElement.append(firstOption);
  ///////////////////////////////////////////////////////////////////

  cars.forEach((car) => {
    const option = document.createElement("option");
    option.setAttribute("value", `${car.id}`);
    option.textContent = `${car.brand} - ${car.model} - ${car.year}`;
    selectElement.append(option);
  });
};
