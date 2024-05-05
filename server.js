const http = require('http');
const cors = require("cors");
const dotenv = require('dotenv');
const swagger = require('./helpers/swagger');

const app = require("./app");
dotenv.config();

// Prevent CORS Errors.
// CORS Stands for Cross-Origin Resource Sharing.
// Allow api call
const corsOptions = {
  origin: process.env.API_URL
};

app.use(cors(corsOptions));

swagger(app);

app.set('port', process.env.PORT || 5050);
const server = http.createServer(app);

// Start the server
server.listen(process.env.PORT || 5050, () => {
  console.log("Server is running on", 5050);
});


