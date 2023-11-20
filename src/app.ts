import Header from "./components/Header"
import "./style.css"
import router from "./utils/router"

const root = document.getElementById('root') as HTMLDivElement

const app = (): string => {
  return (`
    ${Header()}
    ${currentElement}
  `)
}

let currentElement = ''
export const setCurrentElement = (element: string) => {
  currentElement = element
  root.innerHTML = app()
}

window.addEventListener('load', router)