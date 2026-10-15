import * as studentModels from '../models/studentModel.js'; 
  
export const fetchAllstudent = async () => {
    const students = await studentModels.fetchAllStudents();
    return students;
}

export const createStudent = async (student) => {
    const studentId = await studentModels.insertStudent(student);
    return studentId;
}

export const updateStudent = async (student) => {
    const updatedStudent = await studentModels.update(student);
    return updatedStudent;
}   

export const deleteStudent = async (id) => {
    const deletedStudent = await studentModels.remove(id);
    return deletedStudent;
}