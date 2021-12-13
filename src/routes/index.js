import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/about": About,
};

const router = async () => {
  const header = null || document.querySelector("#header");
  const app = null || document.querySelector("#app");
  const footer = null || document.querySelector("#footer");

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  app.innerHTML = await render();
  footer.innerHTML = await Footer();
};

export default router;
