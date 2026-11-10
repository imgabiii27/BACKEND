import * as studentModels from '../models/studentModel.js'; 
import ValidationError from '../utils/ValidationError.js';
  
export const fetchAllstudent = async () => {
    const students = await studentModels.fetchAllStudents();
    return students;
}

const doesStudentExist = async (student) => {
    let existing;
    if (Object.hasOwn(student, "id")) {
        existing = await studentModels.findStudentById(student.id);
    } else {
        existing = await studentModels.findStudentBySrcode(student.srcode);
    }

    if (existing.length > 0) {
        return true;
    }
    return false;
}

export const createStudent = async (student) => {
    if (!student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, 'Name, srcode, and program are required');
    }

    const existing = await doesStudentExist(student);
    if (existing) {
        throw new ValidationError(404, 'Student already exists!');
    }

    const studentId = await studentModels.insertStudent(student);
    return studentId;
}

export const updateStudent = async (student) => {
    if (!student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, 'Name, srcode, and program are required');
    }

    const existing = await doesStudentExist(student);
    if (!existing) {
        throw new ValidationError(404, 'Student does not exist!');
    }

    const updatedStudent = await studentModels.update(student);
    return updatedStudent;
}   

export const deleteStudent = async (id) => {
    const student = { id };
    const existing = await doesStudentExist(student);
    if (!existing) {
        throw new ValidationError(404, 'Student does not exist!');
    }

    const deletedStudent = await studentModels.remove(id);
    return deletedStudent;
}