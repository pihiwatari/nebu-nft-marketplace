const resolveRoutes = (route) => {
  if (route.length >= 8) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return route == "/" ? "/" : `/${route}`;
};

export default resolveRoutes;
