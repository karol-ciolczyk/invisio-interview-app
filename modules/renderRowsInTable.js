import { addDeleteActionForButton } from "./addDeleteActionForButton.js";

export const renderRowsInTable = function (cars) {
  const tBody = document.querySelector("tbody");

  cars.forEach((car, index) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const tdBrand = document.createElement("td");
    const tdModel = document.createElement("td");
    const tdYear = document.createElement("td");
    const tdButton = document.createElement("td");
    const tdCheckBox = document.createElement("td");
    const button = document.createElement("button");

    /// bootstrap checkbox component
    // const div = document.createElement("div");
    // div.classList.add("form-check");
    // const input = document.createElement("input");
    // input.classList.add("form-check-input");
    // input.setAttribute("type", "checkbox");
    // input.setAttribute("value", "");
    // input.setAttribute("data-id", `${car.id}`);
    // div.append(input);
    ///

    tr.classList.add(`car`);
    th.setAttribute("scope", "row");
    th.textContent = `${index + 1}`;
    tdBrand.textContent = car.brand;
    tdModel.textContent = car.model;
    tdYear.textContent = car.year;
    button.textContent = "delete";
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.setAttribute("data-id", `${car.id}`);
    addDeleteActionForButton(button);

    tr.append(th);
    tr.append(tdBrand);
    tr.append(tdModel);
    tr.append(tdYear);
    tdButton.append(button);
    tr.append(tdButton);
    // tdCheckBox.append(input);
    // tr.append(tdCheckBox);
    tBody.append(tr);
  });
};
