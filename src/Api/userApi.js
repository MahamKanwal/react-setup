import axios from "axios";
import { apiUrl } from "./index";

const getAllUsers = async() => {
try {
    const {data} = await axios.get(`${apiUrl}/users`);
    return data
} catch (error) {
    console.error("Error fetching users:", error);
}
}

const userApi =  {
    getAllUsers
}

export default userApi;