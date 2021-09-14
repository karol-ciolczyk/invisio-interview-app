export const removeRows = function () {
  const rows = document.querySelectorAll(".car");
  rows.forEach((row) => {
    row.parentNode.removeChild(row);
  });
};
