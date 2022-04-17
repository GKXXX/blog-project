const jsonwebtoken = require("jsonwebtoken")
const User = require("./models/User")

const {JsonWebTokenError} = jsonwebtoken

const Auth = async (req,res,next) => {
  const {
    headers: {authentication:jwt}
  } = req

  if (!jwt) {
    res.status(401).send({error: "Access denied : not aauythentified"})

    return
  }

  try {
    const payload = jsonwebtoken.verify(jwt,"Jugulaire")
    req.payload = payload

    next()
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      res.status(401).send({error: "invalid token"})

      return
    }
  }

  res.status(500).send({error:"Server error"})
}

module.exports = Auth