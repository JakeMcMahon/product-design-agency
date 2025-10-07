const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
const host = '0.0.0.0';
const distDir = './dist';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  let filePath = path.join(distDir, req.url);
  
  // Remove query parameters
  if (filePath.indexOf('?') > -1) {
    filePath = filePath.substring(0, filePath.indexOf('?'));
  }
  
  // If filePath is a directory, serve index.html
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  } else if (!path.extname(filePath)) {
    // If no extension, treat as route and serve index.html
    filePath = path.join(distDir, 'index.html');
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found, serve index.html for client-side routing
        fs.readFile(path.join(distDir, 'index.html'), (error, content) => {
          if (error) {
            res.writeHead(500);
            res.end('Server Error: Could not load index.html');
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
  console.log(`Static file server running at http://${host}:${port}/`);
  console.log(`Serving files from ${distDir}`);
});