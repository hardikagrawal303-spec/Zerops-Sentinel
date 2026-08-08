const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Essential for container network binding

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Application is Live on Zerops!</h1>');
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
