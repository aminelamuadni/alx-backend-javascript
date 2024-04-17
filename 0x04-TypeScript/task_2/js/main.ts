// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  type: 'Director' = 'Director'; // Added to identify the type

  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  type: 'Teacher' = 'Teacher'; // Added to identify the type

  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create Employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  const numericSalary = typeof salary === 'string' ? parseInt(salary.replace(/^\D+/g, ''), 10) : salary;
  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type guard to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee.type === 'Director';
}

// Function to execute work based on the type of employee
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
