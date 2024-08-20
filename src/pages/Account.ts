import App from "../App"

const Account = (): string => {
  const submitHandler = (event: MouseEvent) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement
    const input = target.querySelector('input') as HTMLInputElement

    if (input.value.length) {
      App.state.login(input.value)
    } else {
      alert('please write your email')
    }
  }

  const logout = App.state.logout
  window.submitHandler = submitHandler
  window.logout = logout

  return (`
    <div class="page-wrapper">
      <h1>
        Your account :)
      </h1>
      ${App.state.email ? (`
        <div class="login">
          <span>your is login :)</span>
          <button onClick="logout()">logout</button>
        </div>
      `) : (`
        <form onSubmit="submitHandler(event)">
          <label for="input">please write your email</label>
          <input type="email" id="input" placeholder="example@gmail.com" />
          <button type="submit">
            submit
          </button>
        </form>
      `)}
    </div>
  `)
}

export default Account