import "./styles/styles.css";

// open close mobile menu

// closed menu icon
const $hamMenu = document.querySelector("#menu-icon");

//mobile nav menu
const $mobileMenu = document.querySelector("#mobile-menu");

$hamMenu.addEventListener("click", () => {
  $mobileMenu.classList.toggle("hidden");
});
$mobileMenu.addEventListener("click", () => {
  $mobileMenu.classList.toggle("hidden");
});
