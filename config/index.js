const app = require('../app');
const http = require('http').createServer(app);

const port = 3000;

http.listen(port);
