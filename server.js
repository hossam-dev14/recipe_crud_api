const http = require('http');
const cors = require("cors");
const dotenv = require('dotenv');

const app = require("./app");
dotenv.config();

// Enable CORS
const corsOptions = {
  origin: "http://localhost:5050"
};

app.use(cors(corsOptions));


app.set('port', process.env.PORT || 5050);
const server = http.createServer(app);

// Start the server
server.listen(process.env.PORT || 5050, () => {
  console.log("Server is running on", 5050);
});
