import productApi from "./productApi";
import studentApi from "./studentApi";
import userApi from "./userApi";

export const apiUrl = import.meta.env.VITE_API_URL;
const api = {
  userApi,
  productApi,
  studentApi,
};

export default api;
