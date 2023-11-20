import routes from "../routes"

const Header = (): string => {
  return (`
    <header>
      <ul>
        ${
          routes.map(route => (
            `<li>
              <a href="${route.path}">
                ${route.title}
              </a>
            </li>`
          )).join('')
        }
      </ul>
    </header>
  `)
}

export default Header