import { Subjects } from './Teacher';

export namespace Subjects {
    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}