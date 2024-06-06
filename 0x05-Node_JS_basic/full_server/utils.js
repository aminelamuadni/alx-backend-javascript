import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const database = {};
      lines.shift();

      lines.forEach((line) => {
        if (line.trim().length === 0) return;
        const [firstname, , , field] = line.split(',');
        if (!database[field]) {
          database[field] = [];
        }
        database[field].push(firstname.trim());
      });

      resolve(database);
    });
  });
});

export default readDatabase;
module.exports = readDatabase;
