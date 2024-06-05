const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;
const dbFilePath = process.argv[2]; // The database file path from the command line argument

// Function to read and process the CSV file
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

    let report = `Number of students: ${lines.length}\n`;
    Object.entries(studentCounts).forEach(([field, info]) => {
      report += `Number of students in ${field}: ${info.count}. List: ${info.students.join(', ')}\n`;
    });

    return report;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route to handle the root "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route to handle "/students"
app.get('/students', async (req, res) => {
  try {
    const report = await countStudents(dbFilePath);
    res.send(`This is the list of our students\n${report}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Server listens on port 1245
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// Export the app for testing and potential integration in other modules
module.exports = app;
