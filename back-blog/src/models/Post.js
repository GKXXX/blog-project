const {Model} = require("objection")
const User = require("./User")
const Comment = require("./Comment")

class Post extends Model {
  static get tableName() {
    return "post" 
  }

  static get relationMappings() {
    return {
      user: {
        relation:Model.BelongsToOneRelation,
        modelClass:User,
        join: {
          from:"post.idAuteur",
          to:"user.id"
        },
      },
      comments:{
        relation:Model.HasManyRelation,
        modelClass:Comment,
        join:{
          from:"post.id",
          to:"comment.idPost"
        },
      },
    }
  }
}

module.exports = Post