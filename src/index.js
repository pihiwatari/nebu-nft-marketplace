import "./styles/styles.css";
import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
// //event listeners and DOM selectors
// // closed menu icon
// const $hamMenu = document.querySelector("#menu-icon");

// //mobile nav menu
// const $closemobileMenuIcon = document.querySelector("#close-menu");
// const $navigation = document.querySelector("#navigation");

// //feature section selector
// const $featureSection = document.getElementById("nebu-menu");

// //get the nebus object, create a new card and append to the container

// // nebus.forEach((item) => {
// //   const newNebu = NebuCard(item);
// //   $featureSection.appendChild(newNebu);
// // });

// //close open menu listeners

// $hamMenu.addEventListener("click", () => {
//   $navigation.classList.toggle("hidden");
// });
// $closemobileMenuIcon.addEventListener("click", () => {
//   $navigation.classList.toggle("hidden");
// });
