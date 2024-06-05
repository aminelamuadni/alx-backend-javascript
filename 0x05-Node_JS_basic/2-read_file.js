const fs = require('fs');

function countStudents(path) {
    let data;

    // Attempt to read the file synchronously
    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    // Split the file content into lines
    const lines = data.trim().split('\n');

    // Remove the header
    lines.shift();

    // Initialize a map to count students by field
    const fieldCounts = {};
    
    lines.forEach(line => {
        if (line.length > 0) { // Ensure the line is not empty
            const [firstname, , , field] = line.split(',');
            if (!fieldCounts[field]) {
                fieldCounts[field] = {
                    count: 0,
                    students: []
                };
            }
            fieldCounts[field].count++;
            fieldCounts[field].students.push(firstname);
        }
    });

    // Total number of students
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Output the number of students in each field and their names
    for (const field in fieldCounts) {
        if (fieldCounts.hasOwnProperty(field)) {
            const { count, students } = fieldCounts[field];
            console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
        }
    }
}

module.exports = countStudents;
