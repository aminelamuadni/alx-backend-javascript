import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot read the database file'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length <= 1) {
        reject(new Error('Database is empty'));
        return;
      }

      const headers = lines[0].split(',').map((header) => header.trim());
      const fieldIndex = headers.indexOf('field');
      const firstnameIndex = headers.indexOf('firstname');
      const database = {};

      lines.slice(1).forEach((line) => {
        const parts = line.split(',').map((part) => part.trim());
        const field = parts[fieldIndex];
        const firstname = parts[firstnameIndex];
        if (field && firstname) {
          if (!database[field]) {
            database[field] = [];
          }
          database[field].push(firstname);
        }
      });

      resolve(database);
    });
  });
});

export default readDatabase;
module.exports = readDatabase;
