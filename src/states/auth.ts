import router from "../utils/router"

type AuthStateTypes = {
  email: string
}

const authState: AuthStateTypes = {
  email: "",
}

type AuthActionsTypes = {
  login: (email: string) => void
  logout: () => void
}

export const authActions: AuthActionsTypes = {
  login: (email: string) => {
    localStorage.setItem("email", email)
    authState.email = email
    router()
  },
  logout: () => {
    localStorage.removeItem("email")
    authState.email = ""
    router()
  }
}

export default authState