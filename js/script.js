var toggle = document.querySelector(".menu__toggle");
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menu__item");

toggle.addEventListener("click", function(event) {
  event.preventDefault();

  if(menu.classList.contains("menu--closed")){
    for(var i = 1; i <= 3; i++) {
      menuItems[i].classList.remove("menu__item--hidden");
    }
    toggle.classList.remove("menu__toggle--closed");
    toggle.classList.add("menu__toggle--opened");
    menu.classList.remove("menu--closed");
    menu.classList.add("menu--opened");
  }
  else {
    for(var i = 1; i <= 3; i++) {
      menuItems[i].classList.add("menu__item--hidden");
    }
    toggle.classList.add("menu__toggle--closed");
    toggle.classList.remove("menu__toggle--opened");
    menu.classList.remove("menu--opened");
    menu.classList.add("menu--closed");

  }
});
