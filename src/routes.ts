import Account from "./pages/Account"
import Home from "./pages/Home"
import Posts from "./pages/Posts"

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
    path: '/Posts',
    title: 'Posts',
    element: Posts
  },
  {
    path: '/account',
    title: 'Account',
    element: Account
  }
]

export default routes