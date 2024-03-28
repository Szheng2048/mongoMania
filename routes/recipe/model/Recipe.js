// 8. In `Recipe.js`, create a model with the key `recipeName`.
const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName : {
        type: String
    },
    prepTime: {
        type: String
    },
    cooktime:{
        type: String
    },
    ingredients: {
        type: Array
    },
    steps: {
        type: String
    }
})

module.exports = mongoose.model('recipe',recipeSchema)