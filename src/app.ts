import Header from "./components/Header"
import router from "./utils/router"
import "./style.scss"

const App = (page: string): string => {
  return (`
    ${Header()}
    ${page}
  `)
}

App.state = {
  email: '',
  login: (email: string) => {
    localStorage.setItem('email', email)
    App.state.email = email
    router()
  },
  logout: () => {
    localStorage.removeItem('email')
    App.state.email = ''
    router()
  }
}

window.addEventListener('load', () => {
  const email = localStorage.getItem('email')
  if (email?.length) App.state.email = email
})

export default App