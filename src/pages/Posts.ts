import router from "../utils/router"
import App from "../App"

let posts: { title: string }[] = []

const Posts = (): string => {
  return (`
    <div class="page-wrapper">
      <h1>
        Posts page
      </h1>
      ${App.state.email ? (`
        <div class="posts-wrapper">
          ${posts.map(post => (`<div class="post">${post.title}</div>`)).join("")}
        </div>
      `) : (`
        <p>Please login to view posts</p>
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