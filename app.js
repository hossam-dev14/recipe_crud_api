const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const recipeRoutes = require('./routes/recipes');
const userRoutes = require("./routes/users");
var { expressjwt: jwt } = require("express-jwt");

const app = express();

dotenv.config();
const mongoString = process.env.ATLAS_URI;

//Connect API to MongoDB ATLAS
mongoose.connect(mongoString)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))


// ********* Middlewares
// Prevent CORS Errors.
// CORS Stands for Cross-Origin Resource Sharing.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middlewares
app.use(authJwt())
app.use(bodyParser.json());
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);




// Protecting the API and Authentication JWT Middleware
function authJwt() {
  const secret = process.env.JWT_SECRET;
  return jwt({
      secret,
      algorithms: ['HS256']
  })
}





module.exports = app;