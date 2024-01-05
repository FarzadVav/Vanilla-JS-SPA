import app from "../app";
import routes from "../routes";

const root = document.getElementById('root') as HTMLDivElement
let page = ''

const router = () => {
  const route = routes.find(route => route.path === location.pathname);

  if (route) {
    document.title = route.title;
    page = route.element()
    root.innerHTML = app(page)
  } else {
    history.replaceState("", "", "/")
    router()
  }
}

export default router