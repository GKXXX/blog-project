const {Model} = require("objection")
const Post = require("./Post")
const {User} = require("./User")

class Comment extends Model {
  static get tableName() {
    return "comment" 
  }
  static get relationMappings() {
    return {
      auteur:{
        relation:Model.BelongsToOneRelation,
        model:User,
        join:{
          from:"comment.idAuteur",
          to:"user.id"
        },
      },
      post:{
        relation:Model.BelongsToOneRelation,
        model:Post,
        join:{
          from:"comment.idPost",
          to:"post.id"
        },
      },
    }
  }
}

module.exports = Comment