import axios from "axios";
import { apiUrl } from "./index";

const getAllUsers = async() => {
try {
    const {data} = await axios.get(`${apiUrl}/users`);
    return data;
} catch (error) {
    console.error("Error fetching users:", error);
}
}

const createUser = async (user) => {
 try {
    const {data} = await axios.post(`${apiUrl}/users`,user);
    return data;
 } catch (error) {
    console.error("Error creating user:", error);
 }
}

const deleteUser = async (userId) => {
try {
     const {data} = await axios.delete(`${apiUrl}/users/${userId}`);
    return data;
} catch (error) {
    console.error("Error deleting user:", error);   
}
}

const updateUser =async(user) =>{
    try {
         const {data} = await axios.put(`${apiUrl}/users/${user.id}`,user);
    return data;
    } catch (error) {
          console.error("Error updating user:", error);   
    }
}

const userApi =  {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser
}

export default userApi;