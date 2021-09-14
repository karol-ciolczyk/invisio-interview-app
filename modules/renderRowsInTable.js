export const renderRowsInTable = function (cars) {
  const tBody = document.querySelector("tbody");

  cars.forEach((car, index) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const tdBrand = document.createElement("td");
    const tdModel = document.createElement("td");
    const tdYear = document.createElement("td");
    const tdButton = document.createElement("td");
    const button = document.createElement("button");

    tr.classList.add(`car`);
    tr.classList.add(`row-${index + 1}`);
    th.setAttribute("scope", "row");
    th.textContent = `${index + 1}`;
    tdBrand.textContent = car.brand;
    tdModel.textContent = car.model;
    tdYear.textContent = car.year;
    button.textContent = "delete";
    button.classList.add("btn");
    button.classList.add("btn-danger");

    tr.append(th);
    tr.append(tdBrand);
    tr.append(tdModel);
    tr.append(tdYear);
    tdButton.append(button);
    tr.append(tdButton);
    tBody.append(tr);
  });
};
