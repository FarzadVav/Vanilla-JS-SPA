import router from "../utils/router"
import App from "../app"

let posts: { title: string }[] = []

const Posts = (): string => {
  return (`
    <div>
      <h1>
        Posts page
      </h1>
      ${App.state.email ? (`
        <div class="boxes-wrapper">
          ${posts.map(post => (`<div class="post">${post.title}</div>`)).join("")}
        </div>
      `) : (`
        <h3>Please login to view posts</h3>
      `)}
    </div>
  `)
}

window.addEventListener("load", () => {
  console.log("load")
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(_posts => {
      posts = _posts
      console.log(posts)
      router()
    })
})

export default Posts