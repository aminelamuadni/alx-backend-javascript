const http = require('http');
const fs = require('fs').promises;

// Function to read and process students from a CSV file asynchronously
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line && !line.startsWith('firstname'));
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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((report) => {
        res.end(report);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Resource not found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app; // Export the app for possible testing or modular use
