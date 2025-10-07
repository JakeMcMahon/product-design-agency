import { createServer } from 'http';
import { readFile } from 'fs';
import { extname } from 'path';

const port = 8001;
const host = '0.0.0.0';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  let filePath = './responsive-screenshots' + req.url;
  
  // If requesting the root, serve the index.html
  if (req.url === '/') {
    filePath = './responsive-screenshots/index.html';
  }
  
  // If requesting a directory, serve the index.html
  if (req.url.endsWith('/')) {
    filePath = './responsive-screenshots' + req.url + 'index.html';
  }
  
  const ext = extname(filePath).toLowerCase();
  const mimeType = mimeTypes[ext] || 'application/octet-stream';

  readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // If file not found, serve index.html
        readFile('./responsive-screenshots/index.html', (error, content) => {
          if (error) {
            res.writeHead(500);
            res.end('Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': mimeType,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, host, () => {
  console.log(`Screenshot Gallery Server running at http://${host}:${port}/`);
  console.log(`Public access: http://209.38.85.211:${port}/`);
});