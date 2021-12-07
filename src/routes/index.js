import Header from "../templates/Header";
import Home from "../pages/Home";
import About from "../pages/About";

const routes = {
  "/": Home,
  "/about": About,
};

const router = async () => {
  const header = null || document.querySelector("#header");
  const app = null || document.querySelector("#app");

  header.innerHTML = await Header();
  app.innerHTML = await Home();
};

export default router;
