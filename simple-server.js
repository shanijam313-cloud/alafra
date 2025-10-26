import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  let filePath = req.url;
  
  // Remove query parameters
  if (filePath.includes('?')) {
    filePath = filePath.split('?')[0];
  }
  
  // Handle the root path
  if (filePath === '/' || filePath === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  } 
  // Handle public files
  else if (filePath.startsWith('/public/')) {
    filePath = path.join(__dirname, filePath);
  }
  // Handle hero images and other public assets
  else if (filePath.startsWith('/hero/') || filePath.startsWith('/course/')) {
    filePath = path.join(__dirname, 'public', filePath);
  }
  // For all other paths, try to serve static files or fallback to index.html
  else {
    // Try to serve the file directly first
    const directPath = path.join(__dirname, filePath);
    if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
      filePath = directPath;
    } else {
      // For SPA routing, serve index.html
      filePath = path.join(__dirname, 'index.html');
    }
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found, serve index.html for SPA routing
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Open your browser and go to http://localhost:${PORT}/`);
});