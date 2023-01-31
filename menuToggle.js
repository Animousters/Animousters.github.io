let menuShown = false;

function showMenu() {
  document.getElementById("menuItems").style.width = "100%";
  document.getElementById("menuItems").style.marginLeft = "70pt";
  document.getElementById("menuItems").style.marginRight = "10pt";
  document.getElementById("scroller").style.display = "none";
  menuShown = true;
}
function hideMenu() {
  document.getElementById("menuItems").style.width = "0%";
  document.getElementById("menuItems").style.marginLeft = "0pt";
  document.getElementById("menuItems").style.marginRight = "0pt";
  document.getElementById("scroller").style.display = "block";
  menuShown = false;
}
function menuToggle(menuShown) {
  menuShown ? hideMenu() : showMenu();
}
