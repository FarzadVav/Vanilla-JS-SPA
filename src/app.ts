import Header from "./components/Header"
import "./style.css"

const root = document.getElementById('root') as HTMLDivElement

const app = (): string => {
  return (`
    ${Header()}
  `)
}

window.addEventListener('load', () => {
  root.innerHTML = app()
})