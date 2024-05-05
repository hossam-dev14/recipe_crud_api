const dotenv = require('dotenv'),
      express = require("express"),
      bodyParser = require('body-parser'),
      mongoose = require("mongoose"),
      recipeRoutes = require('./routes/recipes'),
      userRoutes = require("./routes/users"),
      authJwt = require("./middlewares/jwt"),
      errorHandler = require("./middlewares/errors_handler");

const app = express();

dotenv.config();
const mongoString = process.env.ATLAS_URI;

//Connect API to MongoDB ATLAS
mongoose.connect(mongoString)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))


// ********* Middlewares ***********
// Prevent CORS Errors.
// CORS Stands for Cross-Origin Resource Sharing.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());
app.use(authJwt())
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler)



module.exports = app;