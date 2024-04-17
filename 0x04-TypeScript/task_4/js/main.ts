// Create instances of each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create a teacher with C++ experience
export const cTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10  // only C++ experience shown for clarity
};

// C++ subject interactions
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());  // Outputs: "Here is the list of requirements for Cpp"
console.log(cpp.getAvailableTeacher());  // Outputs: "Available Teacher: Guillaume" or "No available teacher"

// Java subject interactions
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());  // Outputs: "Here is the list of requirements for Java"
console.log(java.getAvailableTeacher());  // Outputs: "No available teacher" because no experienceTeachingJava is set

// React subject interactions
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());  // Outputs: "Here is the list of requirements for React"
console.log(react.getAvailableTeacher());  // Outputs: "No available teacher" because no experienceTeachingReact is set
