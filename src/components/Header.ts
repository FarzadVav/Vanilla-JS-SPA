import App from "../App"
import routes from "../routes"
import router from "../utils/router"

const Header = (): string => {
  return (`
  <header>
    <ul>${routes.map((route) => `<li><a href="${route.path}" data-link>${route.title}</a></li>`).join("")}</ul>
    ${App.state.email.length ? `<span>${App.state.email}</span>` : ''}
  </header>
  `)
}

window.addEventListener("click", (e) => {
  const target = e.target as HTMLLinkElement

  if (Object.keys(target.dataset).includes("link")) {
    e.preventDefault();
    history.pushState("", "", target.href);
    router()
  }
})

export default Header;