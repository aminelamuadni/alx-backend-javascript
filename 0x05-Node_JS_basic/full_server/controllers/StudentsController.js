import readDB from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDB(dataPath)
      .then((students) => {
        const response = ['This is the list of our students'];
        Object.keys(students).sort().forEach((field) => {
          response.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        });
        res.status(200).send(response.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDB(dataPath)
      .then((students) => {
        if (Object.prototype.hasOwnProperty.call(students, major)) {
          const names = students[major].join(', ');
          res.status(200).send(`List: ${names}`);
        } else {
          res.status(404).send('No students found for the major');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
