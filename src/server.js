const net = require('net');
const server = net.createServer();

server.on('connection', (clientSocket) => {
  console.log('clientSocket');
  clientSocket.on('data', (chunk) => {
    console.log(chunk.toString());
  });
  clientSocket.write('hello');
});

server.listen(3000, () => {
  console.log('server is runing at localhost:3000');
});
