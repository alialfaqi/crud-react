export function disableF12() {
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 123) {
      e.preventDefault();
    }
  });
}

export function disableRightClick() {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}
