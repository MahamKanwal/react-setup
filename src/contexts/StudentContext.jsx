import { createContext, useContext, useEffect, useState } from "react";
import api from "../Api";

// 1️⃣ Create Context
const StudentContext = createContext();

// 2️⃣ Create Provider Component
const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const handleDeleteStudent = async (id) => {
    const deleteStudent = await api.studentApi.deleteStudent(id);
    if (deleteStudent) {
      const updatedStudents = students.filter((student) => student.id != id);
      setStudents(updatedStudents);
    }
  };

  const addAndUpdateStudent = async (newStudent) => {
    if (editStudent) {
      const student = await api.studentApi.updateStudent(newStudent);
      if (!student) return;
      const updateStudents = students.map((oldStudent) =>
        oldStudent.id == editStudent.id ? student : oldStudent
      );
      setStudents(updateStudents);
      setEditStudent(null);
    } else {
      const newStudentWithId = {
        ...newStudent,
        id: String(students.length + 1),
      };
      const student = await api.studentApi.createStudent(newStudentWithId);
      if (!student) return;
      setStudents([...students, student]);
    }
  };

  const editStudentFn = (student) => {
    setEditStudent(student);
  };

  const fetchAllStudents = async () => {
    const students = await api.studentApi.getAllStudents();
    if (!students) return;
    setStudents(students);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const studentContextValue = {
    students,
    addAndUpdateStudent,
    editStudent,
    editStudentFn,
    handleDeleteStudent,
  };

  return (
    <StudentContext.Provider value={studentContextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useStudents = () => useContext(StudentContext);
