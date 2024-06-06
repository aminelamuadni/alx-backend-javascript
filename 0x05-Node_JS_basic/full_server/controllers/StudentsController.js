import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const response = ['This is the list of our students'];
      Object.keys(data).sort().forEach((field) => {
        response.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      });
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // Check if the major is valid
    if (!VALID_MAJORS.includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentGroups = await readDatabase(process.argv[2]);

      // Check if there are any students in the given major
      if (studentGroups[major] && studentGroups[major].length > 0) {
        // Return a list of students if found
        const studentsList = studentGroups[major].map((student) => student.firstname).join(', ');
        return res.status(200).send(`List: ${studentsList}`);
      }
      // If no students are found for the major, return an empty 'List: '
      return res.status(200).send('List: ');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
