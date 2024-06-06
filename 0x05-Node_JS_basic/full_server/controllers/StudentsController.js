import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(_req, res) {
    const data = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(data)
      .then((students) => {
        const responseMessages = ['This is the list of our students'];
        const sortStudentsByName = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, studentsList] of Object.entries(students).sort(sortStudentsByName)) {
          responseMessages.push([
            `Number of students in ${field}: ${studentsList.length}.`,
            'List:',
            studentsList.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        res.status(200).send(responseMessages.join('\n'));
      })
      .catch((err) => {
        res
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((data) => {
        let resText = '';

        if (Object.keys(data).includes(major)) {
          const studentsList = data[major];
          resText = `List: ${studentsList.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(resText);
      })
      .catch((error) => {
        res
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
