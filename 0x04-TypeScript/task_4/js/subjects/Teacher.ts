export namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number; // Optional for C++
        experienceTeachingReact?: number; // Optional for React
        experienceTeachingJava?: number; // Optional for Java
    }
}