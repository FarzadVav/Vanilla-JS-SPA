import App from "../App";
import routes from "../routes";

const root = document.getElementById('root') as HTMLDivElement
let page = ''

const router = () => {
  const route = routes.find(route => route.path === location.pathname);

  if (route) {
    document.title = route.title;
    page = route.element()
    root.innerHTML = App(page)
  } else {
    history.replaceState("", "", "/")
    router()
  }
}

window.addEventListener('load', router)
window.addEventListener("popstate", router)

export default router