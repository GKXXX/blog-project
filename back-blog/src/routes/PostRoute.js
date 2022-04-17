const Post = require("../models/Post")
const Comment = require("../models/Comment")
const User = require("../models/User")

// eslint-disable-next-line no-undef
module.exports = PostRoute = ({app}) => {
  app.get("/all",async (req,res) => {
    const posts = await Post.query().select("post.*","user.username as auteur").leftJoinRelated("user").orderBy("datePublication","desc")

    res.send(posts)
  })

  app.get("/post/:postId",async (req,res) =>{
    const {
      params: {postId}
    } = req

    const post = await Post.query().where("post.id","=",postId,"comment.text as comments").leftJoinRelated("comments")


    res.send(post)
  })

  app.post("/:idAuteur/post/:idPost/comment",async (req,res) => {
    const {
      params:{idAuteur,idPost},
      body:{text}
    } = req

    await Comment.query().insert(text,idAuteur,idPost)

    res.send(400).send()
  })

  app.post("/:idAuteur/posts",async (req,res) => {
    const {
      params:{idAuteur},
      body:{titre,description}
    } = req

    const dateCreation = Date.now()

    await Post.query().insert(titre,description,idAuteur,dateCreation)

    res.status(400).send()
  })

  app.put("/posts/:id",async (req,res) =>{
    const {
      params:{id},
      body:{titre,description}
    } = req

    const post = await Post.query().updateAndFetchById(id,{titre,description})

    res.status(400).send(post)
  })

  app.delete("/:idAuteur/posts/:id",async (req,res) => {
    const {
      params:{idAuteur,id}
    } = req
    const post = await Post.query().findById(id)

    const requestingUser = await User.query().findById(idAuteur)
    
    if (post[0].idAuteur == idAuteur) {
      await Post.query().deleteById(id)
      res.status(400).send()
    } else if (requestingUser[0].idRole == 1) {
      await Post.query().deleteById(id)
      res.status(400).send()
    } else {
      res.status(401).send("Not the author of post or no right to delete a post.")
    }
  })

  app.delete("/:idDemandeur/:id/comment",async (req,res) => {
    const {
      params:{idDemandeur,id}
    } = req

    const comment = await Comment.query().findById(id)

    if (comment[0].idAuteur == idDemandeur) {
      await Comment.query().deleteById(id)
      res.status(400).send()
    } else {
      res.status(401).send("wrong user trying to delete comment")
    }
  })
}
