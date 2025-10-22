import { createContext, useContext, useEffect, useState } from "react";
import api from "../Api";

// 1️⃣ Create Context
const StudentContext = createContext();

// 2️⃣ Create Provider Component
const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [editStudent, setEditStudent] = useState(null);

    const handleDeleteStudent = async(id) => {
     const deleteUser = await api.userApi.deleteUser(id);
       if(deleteUser){
const updatedStudents = students.filter(std => std.id != id)
        setStudents(updatedStudents);
    };

       } 
    const addAndUpdateStudent = async(newStd) => {
        if (editStudent) {
            const user = await api.userApi.updateUser(newStd);
if(!user) return;
            const updateStudents = students.map(oldStd => oldStd.id == editStudent.id ? user : oldStd);
            setStudents(updateStudents);
            setEditStudent(null);
        } else {
          const newStdWithId = { ...newStd, id:String(students.length + 1)};
          const user = await api.userApi.createUser(newStdWithId);
if(!user) return;
              setStudents([...students,user]);
        }
    }

    const editStudentFn = (std) => {
        setEditStudent(std)
    }

const fetchAllUsers = async() => {
 const users  = await api.userApi.getAllUsers();
 setStudents(users);
}

useEffect(() =>{
    fetchAllUsers();
},[])

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

