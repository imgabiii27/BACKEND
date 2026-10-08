import * as studentModels from '../models/studentModel.js'; 
  
export const fetchAllstudent = async () => {
    const students = await studentModels.fetchAllStudents();
    return students;
}

export const createStudent = async (student) => {
    const studentId = await studentModels.insertStudent(student);
    return studentId;
}
