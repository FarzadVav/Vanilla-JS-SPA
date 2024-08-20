import routes from "../routes";
import App from "../app";

const router = () => {
  const root = document.getElementById('root') as HTMLDivElement
  const route = routes.find(route => route.path === location.pathname);
  let page = ""

  if (route) {
    document.title = route.title;
    page = route.element()
    root.innerHTML = App(page)
  }
}

window.addEventListener("load", router)
window.addEventListener("popstate", router)

export default router