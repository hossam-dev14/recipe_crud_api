const express = require('express');
const router = express.Router();


const {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    // filterRecipe,
    deleteRecipe
} = require('../controllers/recipes.js');



router.post('/', createRecipe)
router.get('/', getRecipes)
router.get('/:id', getRecipe)
router.put('/:id',  updateRecipe)
// router.get('/query', filterRecipe)
router.delete('/:id', deleteRecipe)



module.exports = router

