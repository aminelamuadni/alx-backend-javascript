const http = require('http');
const fs = require('fs').promises;

// Function to read and process the student data from the CSV file
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line && !line.startsWith('firstname'));
      if (lines.length === 0) throw new Error('No valid entries found.');

      const studentCounts = {};
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        studentCounts[field] = studentCounts[field] || { count: 0, students: [] };
        studentCounts[field].count += 1;
        studentCounts[field].students.push(firstname);
      });

      let response = `Number of students: ${lines.length}\n`;
      Object.entries(studentCounts).forEach(([field, info]) => {
        response += `Number of students in ${field}: ${info.count}. List: ${info.students.join(', ')}\n`;
      });
      return response;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Create the HTTP server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Resource not found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on http://localhost:1245');
});

module.exports = app;
