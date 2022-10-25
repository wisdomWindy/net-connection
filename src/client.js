const net = require('net');

const client = net.createConnection({
  host:'localhost',
  port:3000
});

client.on('connect', () => {
  console.log('connect');
});

client.on('data', (chunk) => {
  console.log(chunk.toString());
});

