import App from "../App"
import router from "../utils/router"

const Account = (): string => {
  const submitHandler = (event: MouseEvent) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement
    const input = target.querySelector('input') as HTMLInputElement

    if (input.value.length) {
      // localStorage.setItem('email', input.value)
      App.state.email = input.value
      router()
    } else {
      alert('please write your email')
    }
  }

  window.submitHandler = submitHandler

  return (`
    <div>
      <h1>
        Your account :)
      </h1>
      <form onSubmit="submitHandler(event)">
        <label for="input">please write your email</label>
        <input type="email" id="input" placeholder="example@gmail.com" />
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  `)
}

export default Account