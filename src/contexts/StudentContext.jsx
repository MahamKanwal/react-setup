import { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const StudentContext = createContext();

// 2️⃣ Create Provider Component
const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [editStudent, setEditStudent] = useState(null);

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter(std => std.id != id)
        setStudents(updatedStudents);
    }

    const addAndUpdateStudent = (newStd) => {
        if (editStudent) {
            const updateStudents = students.map(oldStd => oldStd.id == editStudent.id ? newStd : oldStd);
            setStudents(updateStudents);
            setEditStudent(null);
        } else {
            setStudents([...students, { ...newStd, id: students.length + 1 }]);
        }
    }

    const editStudentFn = (std) => {
        setEditStudent(std)
    }



    const studentContextValue = {
        students,
        addAndUpdateStudent,
        editStudent,
        editStudentFn,
        handleDeleteStudent
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

