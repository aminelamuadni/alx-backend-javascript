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
