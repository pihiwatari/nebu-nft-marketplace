import "./styles/styles.css";
import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

// Event listener for mobile nav menu
document.addEventListener("click", function (event) {
  if (event.target && event.target.id == "open-menu") {
    const nav = document.querySelector("#link-list");
    nav.classList.toggle("hidden");
  }
});

// Event listener for links color change based on current page
window.addEventListener("hashchange", function () {
  const link = null || document.getElementById(`${window.location.hash}`);
  if (link != null) {
    link.classList.add("bg-nebu-red", "text-white", "cursor-default");
  }
});
