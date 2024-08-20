import router from "./router"
import Header from "./components/Header"
import "./style.scss"

const App = (page: string): string => {
  return (`
    ${Header()}
    ${page}
  `)
}

App.state = {
  email: "",
  login: (email: string) => {
    localStorage.setItem("email", email)
    App.state.email = email
    router()
  },
  logout: () => {
    localStorage.removeItem("email")
    App.state.email = ""
    router()
  }
}

window.addEventListener("load", () => {
  const email: string = localStorage.getItem('email') || ""
  if (email?.length) App.state.login(email)
})

window.addEventListener("click", e => {
  const target = e.target as HTMLLinkElement
  if (Object.keys(target.dataset).includes("link")) {
    e.preventDefault()
    history.pushState("", "", target.href)
    router()
  }
})

export default App