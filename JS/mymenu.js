// onclick call function myMenu
function myMenu() { // add a 'responsive' class to 'menu' class element
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive"; // If class name is 'menu' add 'responsive' class after it.
  } else {
    x.className = "menu";
  }
}