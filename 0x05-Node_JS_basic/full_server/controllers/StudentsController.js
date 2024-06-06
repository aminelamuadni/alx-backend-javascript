import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      Object.keys(data).sort().forEach((field) => {
        response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(process.argv[2]);
      if (data[major]) {
        return res.status(200).send(`List: ${data[major].join(', ')}`);
      }
      return res.status(404).send('Major not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
