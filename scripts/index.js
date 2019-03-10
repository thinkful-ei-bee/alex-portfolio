function myFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "top-nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "top-nav-menu";
  }
}