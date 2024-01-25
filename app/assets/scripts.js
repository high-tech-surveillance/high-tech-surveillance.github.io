/* PugPlug wraps the code in "eval" so, eny variable declaration is encapsulated. To overpass this, ommiting variable declarations will make it global
 *
 * Setting te variable in the "window" object will also do the trick
 * */
window.toggleMenu = function toggleMenu() {
  console.log("toggleMenu");
  let element = document.getElementById("navigation-menu");

  if (element.classList.contains("toggle-active")) {
    element.classList.remove("toggle-active");
  } else {
    element.classList.add("toggle-active");
  }
};
