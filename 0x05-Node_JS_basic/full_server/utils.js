import fs from 'fs/promises';

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line);
    const students = {};

    lines.slice(1).forEach((line) => {
      const values = line.split(',').map((value) => value.trim());
      const field = values[3];
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(values[0]);
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
module.exports = readDatabase;
