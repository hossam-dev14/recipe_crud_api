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


/****** POST Methods */
/**
 * @openapi
* components:
*  securitySchemes:
*    bearerAuth:
*     type: http
*     scheme: bearer
* paths:
*  '/api/recipes/':
*    post:
*     security:
*         - bearerAuth: []
*     tags:
*     - Recipe Controller
*     summary: Create a recipe
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*            type: object
*            required:
*              - title
*              - description
*              - rating
*              - category
*              - ingredients
*              - instructions
*            properties:
*              schema:
*               type: object
*               properties:
*                 title:
*                   type: string
*                 description:
*                   type: string
*                 rating:
*                   type: number
*                 category:
*                   type: string
*                 ingredients:
*                   type: array
*                   items:
*                     type: string
*                 instructions:
*                   type: string
*     responses:
*      201:
*        description: Created
*      409:
*        description: Conflict
*      404:
*        description: Not Found
*      500:
*        description: Server Error
*/


/****** GET Methods */
/**
 * @openapi
* paths:
*   '/api/recipes/':
*     get:
*       tags:
*         - Recipe Controller
*       summary: Get all recipes
*       responses:
*         200:
*           description: OK
*         404:
*           description: Not Found
*         500:
*           description: Server Error
*/

/**
 * @openapi
* paths:
*   '/api/recipes/{id}':
*     get:
*       tags:
*         - Recipe Controller
*       summary: Get a recipe by ID
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: string
*           required: true
*           description: Recipe ID
*       responses:
*         200:
*           description: OK
*         404:
*           description: Not Found
*         500:
*           description: Server Error
*/


/****** PUT Methods */
/**
 * @openapi
* components:
*  securitySchemes:
*    bearerAuth:
*     type: http
*     scheme: bearer
* paths:
*   '/api/recipes/{id}':
*     put:
*       security:
*         - bearerAuth: []
*       tags:
*         - Recipe Controller
*       summary: Update a recipe by ID
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: string
*           required: true
*           description: Recipe ID
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 title:
*                   type: string
*                 description:
*                   type: string
*                 rating:
*                   type: number
*                 category:
*                   type: string
*                 ingredients:
*                   type: array
*                   items:
*                     type: string
*                 instructions:
*                   type: string
*       responses:
*         201:
*           description: Updated successfully
*         400:
*           description: Bad request, update failed
*/

/**
 * @openapi
*  components:
*   securitySchemes:
*     bearerAuth:
*       type: http
*       scheme: bearer
* paths:
*   '/api/recipes/{id}':
*     delete:
*       security:
*         - bearerAuth: [] 
*       tags:
*         - Recipe Controller
*       summary: Delete a recipe by ID
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: string
*           required: true
*           description: Recipe ID
*       responses:
*         204:
*           description: No Content, recipe deleted successfully
*         404:
*           description: Not Found, recipe with specified ID not found
*         500:
*           description: Server Error
*/


router.post('/', createRecipe)
router.get('/', getRecipes)
router.get('/:id', getRecipe)
router.put('/:id',  updateRecipe)
// router.get('/query', filterRecipe)
router.delete('/:id', deleteRecipe)

module.exports = router

