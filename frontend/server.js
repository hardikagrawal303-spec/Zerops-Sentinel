const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Frontend is live on Zerops!</h1>');
});

server.listen(3000, () => {
  console.log('Frontend listening on port 3000');
});
