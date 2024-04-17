// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;  // Allows any other properties
}

// Extend the Teacher interface to create Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function that implements the PrintTeacherFunction interface
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// New interfaces for Student
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
