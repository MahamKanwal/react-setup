import { createContext, useContext, useEffect, useState } from "react";
import api from "../Api";

// 1️⃣ Create Context
const UserContext = createContext();

// 2️⃣ Create Provider Component
const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    const handleDeleteUser = async(id) => {
     const deleteUser = await api.userApi.deleteUser(id);
       if(deleteUser){
const updatedUsers = users.filter(user => user.id != id)
        setUsers(updatedUsers);
    };
       };

    const addAndUpdateUser = async(newUser) => {
        if (editUser) {
            const user = await api.userApi.updateUser(newUser);
if(!user) return;
            const updateUsers = users.map(oldUser => oldUser.id == editUser.id ? user : oldUser);
            setUsers(updateUsers);
            setEditUser(null);
        } else {
          const newUserWithId = { ...newUser, id:String(users.length + 1)};
          const user = await api.userApi.createUser(newUserWithId);
if(!user) return;
              setUsers([...users,user]);
        }
    }

    const editUserFn = (user) => {
        setEditUser(user)
    }

const fetchAllUsers = async() => {
 const users  = await api.userApi.getAllUsers();
 setUsers(users);
}

useEffect(() =>{
    fetchAllUsers();
},[])

    const userContextValue = {
        users,
        addAndUpdateUser,
        editUser,
        editUserFn,
        handleDeleteUser
    };


    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useUsers = () => useContext(UserContext);

