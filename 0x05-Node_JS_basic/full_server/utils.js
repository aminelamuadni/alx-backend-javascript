import fs from 'fs/promises';

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line);
    const studentData = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      studentData[field] = studentData[field] || [];
      studentData[field].push(firstname);
    });

    return studentData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
module.exports = readDatabase;
