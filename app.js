const app = require('./config/express')();
const http = require('http').Server(app);

const port = 3000;

http.listen(port);
