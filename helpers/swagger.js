
const swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express"),
express = require("express"),

app = express();

// Swagger configuration options
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Recipes RESTful API',
        version: '1.0.0',
        description: 'A simple Recipes CRUD API application made with Express and documented with Swagger',
        contact: {
            name: "Recipe CRUD API",
            url: "https://github.com/hossam-dev14/recipe_crud_api/"
        },
        version: '1.0.0',
      },
    },
    apis: ['./routes/recipes.js', './routes/users.js'], // Point to the file that contains your API routes
};

// Generate the OpenAPI Specification
const openapiSpecification = swaggerJsdoc(options);

// Serve Swagger UI at /api-docs
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

module.exports = app => {
  // Serve Swagger UI at /api-docs
  app.use('/api-docs', 
  swaggerUi.serve, 
  swaggerUi.setup(openapiSpecification));
}