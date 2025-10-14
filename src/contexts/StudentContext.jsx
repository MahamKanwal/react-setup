import { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const StudentContext = createContext();

// 2️⃣ Create Provider Component
const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([
        { id: 1, name: "ali", email: "ali@gmail.com" },
        { id: 2, name: "ahmed", email: "ahmed@gmail.com" },
        { id: 3, name: "alina", email: "alina@gmail.com" },
    ]);

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter(std => std.id != id)
        setStudents(updatedStudents);
    }
    const studentContextValue = {
        students,
        handleDeleteStudent
    };

    return (
        <StudentContext.Provider value={studentContextValue}>
            {children}
        </StudentContext.Provider>
    );
};

export default StudentProvider;

// 3️⃣ Custom Hook for easier usage
// eslint-disable-next-line react-refresh/only-export-components
export const useStudents = () => useContext(StudentContext);
