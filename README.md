
<h1 align="center">Recipe API</h1>

In this repository, I have created CRUD API operation using Express and NoSql database, and i added authontication & authorization. This code includes nodejs, expressjs, mongodb, mongoose etc.

## Features
- Uses [npm](https://npmjs.com)
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- CORS enabled and uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Logging with [morgan](https://github.com/expressjs/morgan)
- Authentication and Authorization with [JWT](https://jwt.io/)
- Request validation with [joi](https://github.com/hapijs/joi)
- API documentation generation with [Swagger](https://swagger.io/)


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:


### 1. Download the Repository
```bash
# Clone this repository
$ git clone https://github.com/hossam-dev14/recipe_db.git
```
### 2. Install Depedencies
```bash
# Install dependencies
$ npm install
```

### 3. Configure your Atlas Credentials
Replace the placeholder text with the connection string for your Atlas cluster. For more information on finding the connection string, see [Connect via Driver](https://www.mongodb.com/docs/atlas/driver-connection/) in the Atlas documentation.
```bash
const MONGO_URI = "<Your Atlas Connection String>";
```

### 4. Run the Project
```bash
npm start
```

## API Endpoints

### User Routes
- /api/users/signup: POST
- /api/users/login: POST
- /api/users/: GET
- /api/users/:id: GET

### Recipe Routes
- /api/recipes: GET, POST
- /api/recipes/:id: GET, PUT, DELETE


## Test it on  http://localhost:5050/api-docs/


## Authors
- [hossam-dev14](https://hossam-dev14.github.io/)
