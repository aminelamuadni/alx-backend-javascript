const fs = require('fs').promises; // Import the promises API from 'fs'

function countStudents(path) {
  return fs.readFile(path, 'utf8') // Read the file asynchronously
    .then((data) => {
      const lines = data.trim().split('\n');
      const validLines = lines.filter((line) => line && !line.startsWith('firstname'));

      if (validLines.length === 0) {
        throw new Error('No valid entries found.');
      }

      const studentCounts = {};

      validLines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!studentCounts[field]) {
          studentCounts[field] = {
            count: 0,
            students: [],
          };
        }

        studentCounts[field].count += 1;
        studentCounts[field].students.push(firstname);
      });

      // Calculate the total number of students
      const totalStudents = validLines.length;
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students and names in each field
      Object.entries(studentCounts).forEach(([field, info]) => {
        console.log(`Number of students in ${field}: ${info.count}. List: ${info.students.join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
