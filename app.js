const express = require('express')
const logger = require('morgan')
const recipeRouter = require("./routes/recipe/recipeRouter")



const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use("/recipes/",recipeRouter)


module.exports = app