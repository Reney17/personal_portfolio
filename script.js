function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");

  if (menuBth.className === "nav_menu") {
    menuBth.className += "respnsive";
  } else {
    menuBth.className = "nav-menu";
  }
}

/*-------------------Dark Mode---------------------*/

const body = document.querySelector("body");
toggleSwitch - document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
