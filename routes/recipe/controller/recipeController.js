// 9. In `recipeController`, bring in the `Recipe` model and create a function called `getAllRecipe`.

const Recipe = require('../model/Recipe')

module.exports = {
    getAllRecipe:()=>{
        return new Promise((resolve,reject)=>{
            Recipe.find({})
                .then((payload)=>{
                    resolve(payload)
                })
                .catch((error)=>{
                    reject(error)
                })
        })
    },
    createRecipe:(body)=>{
        return new Promise((resolve,reject)=>{
            let savedRecipe = new Recipe({
                recipeName: body.recipeName,
                prepTime: body.prepTime,
                cooktime: body.cooktime,
                ingredients: body.ingredients,
                steps: body.steps
            })
            savedRecipe.save()
            .then((payload)=>{
                resolve(payload)
            })
            .catch(error =>{
                reject(error)
            })
        })
    }
}