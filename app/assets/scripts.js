document.toggleMenu = function toggleMenu() {
  console.log("toggleMenu");
  let element = document.getElementById("navigation-menu");

  if (element.classList.contains("toggle-active")) {
    element.classList.remove("toggle-active");
  } else {
    element.classList.add("toggle-active");
  }
};
