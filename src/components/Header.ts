import routes from "../routes"
import App from "../app"

const Header = (): string => {
  return (`
    <header>
      <ul>${routes.map(route => (`
          <li><a href="${route.path}" data-link>${route.title}</a></li>  
        `)).join("")}
      </ul>
      <span>${App.state.email}</span>
    </header>
  `)
}

export default Header;