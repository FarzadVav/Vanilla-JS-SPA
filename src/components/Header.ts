import routes from "../routes"
import authState, { authActions } from "../global/auth"
import router from "../utils/router"

const Header = (): string => {
  return (`
    <header>
      <ul>${routes.map(route => `<li><a href="${route.path}" data-link>${route.title}</a></li>`).join("")}</ul>
      <span>${authState.email}</span>
    </header>
  `)
}

window.addEventListener("load", () => {
  const email: string = localStorage.getItem('email') || ""
  if (email?.length) authActions.login(email)
})

window.addEventListener("click", e => {
  const target = e.target as HTMLLinkElement
  if (Object.keys(target.dataset).includes("link")) {
    e.preventDefault()
    history.pushState("", "", target.href)
    router()
  }
})

export default Header;