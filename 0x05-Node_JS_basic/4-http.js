const http = require('http'); // Import the http module

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the header with a 200 OK status and content type
  res.end('Hello Holberton School!'); // Send the response text
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app; // Export the app variable
