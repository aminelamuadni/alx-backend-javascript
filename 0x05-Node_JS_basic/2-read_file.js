const fs = require('fs');

function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // Read the file content synchronously
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split('\n').filter(line => line.length > 0 && !line.startsWith('firstname')); // Skip empty lines and the header

  // Create a dictionary to store the number of students by field
  const studentCountByField = {};

  // Process each line
  lines.forEach(line => {
    const [firstname, , , field] = line.split(',');
    if (field in studentCountByField) {
      studentCountByField[field].count += 1;
      studentCountByField[field].students.push(firstname);
    } else {
      studentCountByField[field] = { count: 1, students: [firstname] };
    }
  });

  // Calculate the total number of students
  const totalStudents = lines.length;
  console.log(`Number of students: ${totalStudents}`);

  // Log details for each field
  Object.keys(studentCountByField).forEach(field => {
    console.log(`Number of students in ${field}: ${studentCountByField[field].count}. List: ${studentCountByField[field].students.join(', ')}`);
  });
}

module.exports = countStudents;
