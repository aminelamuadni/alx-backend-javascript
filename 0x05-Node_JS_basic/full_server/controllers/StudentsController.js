import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const response = ['This is the list of our students'];
      Object.keys(data).sort().forEach((field) => {
        response.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      });
      return res.status(200).send(response.join('\n')); // Ensure to use return here
    } catch (error) {
      return res.status(500).send('Cannot load the database'); // Ensure to use return here
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (!['CS', 'SWE'].includes(major)) {
        return res.status(500).send('Major parameter must be CS or SWE'); // Ensured return is used here
      }

      const data = await readDatabase(process.argv[2]);
      if (data[major]) {
        return res.status(200).send(`List: ${data[major].join(', ')}`); // Ensured return is used here
      }
      return res.status(404).send('Major not found'); // Ensured return is used here
    } catch (error) {
      return res.status(500).send('Cannot load the database'); // Ensured return is used here
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
