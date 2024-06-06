import fs from 'fs/promises';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line && !line.startsWith('firstname'));
    const studentData = {};
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!studentData[field]) {
        studentData[field] = [];
      }
      studentData[field].push(firstname);
    });
    return studentData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
module.exports = readDatabase;
