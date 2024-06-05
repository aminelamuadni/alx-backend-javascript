const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;
const dbFilePath = process.argv[2]; // Get the database file path from command line arguments

// Async function to read and process the CSV data
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line && !line.startsWith('firstname'));
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((report) => {
        res.end(report);
      })
      .catch((error) => {
        res.end(error.message);
      });
});

// Listen on port 1245
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app; // Export the app for testing and modular use
