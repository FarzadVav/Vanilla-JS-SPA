import Home from "./pages/Home"
import Shop from "./pages/Shop"

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
  {
    path: '/shop',
    title: 'Shop',
    element: Shop
  },
]

export default routes