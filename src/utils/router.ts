import routes from "../routes";
import { setCurrentElement } from "../app";

const router = () => {
  const route = routes.find(route => route.path === location.pathname);

  if (route) {
    document.title = route.title;
    setCurrentElement(route.element())
  } else {
    history.replaceState("", "", "/");
    router();
  }
}

export default router