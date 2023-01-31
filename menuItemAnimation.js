const menuItems = document.getElementById("menuItems");

Array.from(document.getElementsByClassName("menuItem")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menuItems.dataset.activeIndex = index;
    };
  }
);
