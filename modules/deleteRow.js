export const addDeleteActionForButton = function (button, row) {
  button.addEventListener("click", (event) => {
    row.remove();
  });
};
