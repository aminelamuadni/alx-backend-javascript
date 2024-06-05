const express = require('express');

// Create an instance of express
const app = express();

// Define the route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle any other routes and return a custom 404 error page
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET ${req.path}</pre>\n</body>\n</html>`);
});

// Start listening on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app for testing or potential further development
module.exports = app;
