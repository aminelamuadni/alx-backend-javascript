import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database: file path is undefined'));
  }
  if (path) {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(new Error('Cannot read the database file'));
      }
      if (data) {
        const lines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const database = {};
        const headers = lines[0].split(',');
        const columnNames = headers.slice(0, headers.length - 1);

        for (const line of lines.slice(1)) {
          const values = line.split(',');
          const rowData = values.slice(0, values.length - 1);
          const category = values[values.length - 1];
          if (!Object.keys(database).includes(category)) {
            database[category] = [];
          }
          const record = columnNames
            .map((header, index) => [header, rowData[index]]);
          database[category].push(Object.fromEntries(record));
        }
        resolve(database);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
