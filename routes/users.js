const express = require('express');
const router = express.Router();

app = express()
const { userSignup, userLogin, getUsers, getUser } = require("../controllers/users");

/****** POST Methods */
/**
 * @openapi
 * paths:
 *   '/api/users/signup':
 *     post: 
 *       tags:
 *         - User Controller
 *       summary: Create a user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - firstName
 *                 - lastName
 *                 - email
 *                 - password
 *               properties:
 *                 firstName:
 *                   type: string
 *                   default: simon
 *                 lastName:
 *                   type: string
 *                   default: grandi
 *                 email:
 *                   type: string
 *                   default: simon@mail.com
 *                 password:
 *                   type: string
 *                   default: simonGrandi1234
 *       responses:
 *         201:
 *           description: Created
 *         409:
 *           description: Conflict
 *         404:
 *           description: Not Found
 *         500:
 *           description: Server Error
 */

/**
 * @openapi
 * paths:
 *   '/api/users/login':
 *     post:
 *       tags:
 *         - User Controller
 *       summary: User login
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                   default: simon@mail.com
 *                 password:
 *                   type: string
 *                   default: simonGrandi1234
 *       responses:
 *         200:
 *           description: OK
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Not Found
 *         500:
 *           description: Server Error
 */

/****** GET Methods */
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 * paths:
 *   '/api/users/':
 *     get:
 *       security:
 *         - bearerAuth: [] 
 *       tags:
 *         - User Controller
 *       summary: Get all users
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
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 * paths:
 *   '/api/users/{id}':
 *     get:
 *       security:
 *         - bearerAuth: [] 
 *       tags:
 *         - User Controller
 *       summary: Get a user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: User ID
 *       responses:
 *         200:
 *           description: OK
 *         404:
 *           description: Not Found
 *         500:
 *           description: Server Error
 */

router.post("/signup", userSignup);
router.post("/login",  userLogin);
router.get("/",  getUsers);
router.get("/:id",  getUser);

module.exports = router;