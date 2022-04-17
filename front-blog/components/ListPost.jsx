import {React,useState,useEffect} from "react"
import Post from "./Post"
import api from "./services/api"

const ListPost = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    api
      .get("/all")
      .then((response) => setPosts(response.data))
  }, [])

  console.log(posts)
  return (
    <div className="container">
      <ul>
      {posts.map((entry,id) => {
        <li>
          <div>{entry.titre}</div>
          <div>{entry.desciption}</div>
          <div>{new Date(entry.dateCreation).toLocaleDateString}</div>
        </li>
      })}
      </ul>
    </div>
  )
}

export default ListPost