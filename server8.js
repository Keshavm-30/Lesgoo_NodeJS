const http = require("http");
const {requestHandler} = require("./serverContent");
const server = http.createServer(requestHandler);

server.listen(3000);