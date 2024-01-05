import Header from "./components/Header"
import "./style.scss"

const App = (page: string): string => {
  return (`
    ${Header()}
    ${page}
  `)
}

App.state = {
  email: ''
}

export default App