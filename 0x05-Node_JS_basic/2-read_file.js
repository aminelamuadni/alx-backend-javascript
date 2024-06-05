const fs = require('fs');

function countStudents(path) {
    let data;
    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    const lines = data.trim().split('\n');
    lines.shift(); // Remove header

    const fieldCounts = {};

    lines.forEach(line => {
        if (line) {
            const [firstname, , , field] = line.split(',');
            if (!fieldCounts[field]) {
                fieldCounts[field] = { count: 0, students: [] };
            }
            fieldCounts[field].count++;
            fieldCounts[field].students.push(firstname);
        }
    });

    console.log(`Number of students: ${lines.length}`);
    Object.keys(fieldCounts).forEach(field => {
        console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].students.join(', ')}`);
    });
}

module.exports = countStudents;
