const fs = require('fs');

function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // Read the file content synchronously and ensure it is processed as a string
  const data = fs.readFileSync(path, 'utf8');

  // Use trim to remove whitespace at the start/end and split into lines
  const lines = data.trim().split('\n');

  // Filter out empty lines and the header row
  const validLines = lines.filter((line) => line && !line.startsWith('firstname'));

  // Initialize an object to hold counts and names by field
  const studentCounts = {};

  // Process each valid line
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
}

module.exports = countStudents;
