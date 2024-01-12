const Recipe = require('../models/recipe.js')

// ************* Create: POST /api/recipes *************
const createRecipe = ((req, res, next) => {
    // Create a Recipe
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating ,
        category: req.body.category ,
        ingredients: req.body.ingredients ,
        instructions: req.body.instructions
    });
    // Save Recipe to the database
    recipe.save()
    .then(() => {
        res.status(201).json({ 
            message: 'Post saved successfully!'
        });
    }
    ).catch( (error) => {
        res.status(400).json({
            error: error
        });
    }
    );
})

// Send back: find() method
const getRecipes = ((req, res, next) => {
    Recipe.find()
    .then( recipes => res.status(200).json({ recipes }))
    .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
});


// Retrieving a Specific Recipe: findOne() method
const getRecipe = ((req, res, next) => {
    Recipe.findOne({ _id: req.params.id })
    .then( Recipe => res.status(200).json(Recipe))
    .catch( error => {
        res.status(404).json({
          error: error
        });
      }
    );
});

// Update an Existing Recipe: updateOne()  method.
// Using the 'new' keyword with a Mongoose model creates a new _id field by default.
const updateRecipe = ('/api/recipes/:id', (req, res, next) => {
    const recipe = new Recipe({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      rating: req.body.rating ,
      category: req.body.category ,
      ingredients: req.body.ingredients ,
      instructions: req.body.instructions
    });

    Recipe.updateOne({_id: req.params.id}, recipe).then(
      () => {
        res.status(201).json({
          message: 'Updated!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  
  
// Deleting a Recipe: deleteOne() method.
const deleteRecipe = ('/api/recipes/:id', (req, res, next) => {
  Recipe.deleteOne({_id: req.params.id})
    .then(
      () => {
        res.status(200).json({
          message: 'Deleted!' 
        });
      }
    )
    .catch(
      (error) => {
        res.status(400).json({
            error: error
        });
      }
    );
});
  


module.exports = {
  getRecipes,
  createRecipe,
  getRecipe,
  updateRecipe,
  // filterRecipe,
  deleteRecipe
}