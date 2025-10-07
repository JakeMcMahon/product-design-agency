const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
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

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  let filePath = './dist' + req.url;
  
  // Remove query parameters if present
  if (filePath.indexOf('?') > -1) {
    filePath = filePath.substring(0, filePath.indexOf('?'));
  }
  
  // For React Router, serve index.html for all routes that don't match files
  // But only if it's not a static asset (has extension)
  const extname = String(path.extname(filePath)).toLowerCase();
  let actualFilePath = filePath;
  
  if (!extname && (req.url.startsWith('/ai-automation-sprints') || req.url === '/' || req.url === '/old')) {
    actualFilePath = './dist/index.html';
  } else if (!extname) {
    // For other non-asset routes, serve index.html
    actualFilePath = './dist/index.html';
  }
  
  // Get MIME type based on the actual file being served
  const actualExtname = String(path.extname(actualFilePath)).toLowerCase();
  const mimeType = mimeTypes[actualExtname] || 'application/octet-stream';

  fs.readFile(actualFilePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // If file not found, serve index.html (for React routing)
        fs.readFile('./dist/index.html', (error, content) => {
          if (error) {
            res.writeHead(500);
            res.end('Server Error');
          } else {
            res.writeHead(200, { 
              'Content-Type': 'text/html',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type'
            });
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
  console.log(`Server running at http://${host}:${port}/`);
  console.log(`Russian AI Automation Sprints: http://${host}:${port}/ai-automation-sprints-ru`);
  console.log(`English AI Automation Sprints: http://${host}:${port}/ai-automation-sprints`);
});