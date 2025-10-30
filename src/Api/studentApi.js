import axios from "axios";
import { apiUrl } from "./index";

const getAllStudents = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/students`);
    return data;
  } catch (error) {
    console.error("Error fetching student:", error);
  }
};

const createStudent = async (student) => {
  try {
    const { data } = await axios.post(`${apiUrl}/students`, student);
    return data;
  } catch (error) {
    console.error("Error creating student:", error);
  }
};

const deleteStudent = async (studentId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/students/${studentId}`);
    return data;
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};

const updateStudent = async (student) => {
  try {
    const { data } = await axios.put(`${apiUrl}/users/${user.id}`, user);
    return data;
  } catch (error) {
    console.error("Error updating student:", error);
  }
};

const studentApi = {
  getAllStudents,
  createStudent,
  deleteStudent,
  updateStudent,
};

export default studentApi;
