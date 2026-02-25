const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  const file = req.url === '/' || req.url === '/index.html' ? 'index.html' : req.url.slice(1);
  const filePath = path.join(__dirname, file);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(filePath);
    const types = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png'};
    res.writeHead(200, {'Content-Type': types[ext] || 'text/plain'});
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => console.log(`Dashboard running on port ${PORT}`));
