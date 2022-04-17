const hashPassword = require("../HashPassword")
const User = require("../models/User")
const jsonwebtoken = require("jsonwebtoken")
const auth = require("../Auth")

// eslint-disable-next-line no-undef
module.exports = UserRoutes = ({app}) => {
  //Sign Up
  app.post("/user/register",async (req, res) => {
    const {
      body:{username,password,email}
    } = req


    const hashedPasswordSalt = hashPassword(password)

    const hashedPassword = hashedPasswordSalt.hashedPassword

    const salt = hashedPasswordSalt.salt

    await User.query().insert({username,hashedPassword,salt,email})

    res.status(201).send({ message: "Account created" })
  })

  // Sign in
  app.post("/user/sign-in",async (req,res) => {
    const {
      body: {username,password}
    } = req

    const user = await User.query().where("username","=",username)
    const hashedPasswordSalt = hashPassword(password,user[0].salt)
    const storedPassword = user[0].password

    if (storedPassword !== hashedPasswordSalt.password) {
      res.status(401).send({error:"wrong username or password*"})

      return
    }

    const token = jsonwebtoken.sign(
      {
        payload:{
          user:{
            username:user[0].username,
            role: user[0].idRole,
            id:user[0].id
          }
        }
      },
      "Jugulaire",
      {expiresIn:"2 days"}
    )

    res.send({token})
  })

  app.put("/user/modify/:id",auth,async (req,res) => {
    const {
      params:{id},
      body: {username}
    } = req

    const user = await User.query().updateAndFetchById(id,{username})

    res.status(400).send(user)
  })

  app.delete("/user/:id",auth,async (req,res) => {
    const {
      params:{id}
    } = req

    await User.query().deleteById(id)

    res.status(400).send()
  })
}