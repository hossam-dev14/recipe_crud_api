const mongoose = require("mongoose");


// Create a model
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  category: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: Array, required: true }
});



module.exports = mongoose.model('Recipe', recipeSchema);