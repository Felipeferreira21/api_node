const http = require('http');
const app = require('./app.js');
<<<<<<< HEAD
const port = process.env.PORT || 3000;
=======
const port = process.env.PORT || 8000;
>>>>>>> origin/main
const server = http.createServer(app);
server.listen(port);