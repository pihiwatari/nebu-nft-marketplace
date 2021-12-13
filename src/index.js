import "./styles/styles.css";
import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

//Event listener for mobile nav menu
document.addEventListener("click", function (event) {
  if (event.target && event.target.id == "open-menu") {
    const nav = document.querySelector("#link-list");
    nav.classList.toggle("hidden");
  }
});
