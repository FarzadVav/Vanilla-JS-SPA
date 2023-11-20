import Home from "./pages/Home"

type routeTypes = {
  path: string
  title: string
  element: () => string
}

const routes: routeTypes[] = [
  {
    path: '/',
    title: 'Home',
    element: Home
  },
]

export default routes