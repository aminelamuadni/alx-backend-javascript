import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const response = ['This is the list of our students'];
      Object.keys(students).sort().forEach((field) => {
        response.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      });
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // Validate major early and return if invalid
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      // Ensure a response is sent whether students are found or not
      if (students[major] && students[major].length > 0) {
        return res.status(200).send(`List: ${students[major].join(', ')}`);
      }
      // Always return even if the list is empty
      return res.status(200).send('List: ');
    } catch (error) {
      // Make sure to catch any errors and return a response
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
