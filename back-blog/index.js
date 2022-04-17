const express = require("express")
const morgan = require("morgan")
const {Model} = require("objection")
const Knex = require("knex")
const knexfilejs = require("./knexfile")
const  UserRoute = require("./src/routes/UserRoute.js")
const PostRoute = require("./src/routes/PostRoute")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))

const db = Knex(knexfilejs)

Model.knex(db)

app.use(
  cors({
    origin: "http://localhost:3001",
  })
)

app.use(express.json())

UserRoute({app})

PostRoute({app})

// eslint-disable-next-line no-console
app.listen(3000, () => console.log("Listening on : " + 3000))