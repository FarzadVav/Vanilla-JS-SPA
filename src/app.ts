import Header from "./components/Header"
import router from "./utils/router"
import "./style.css"

const app = (page: string): string => {
  return (`
    ${Header()}
    ${page}
  `)
}

window.addEventListener('load', router)
window.addEventListener("popstate", router)

export default app