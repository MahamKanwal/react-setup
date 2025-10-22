import userApi from "./userApi";

export const apiUrl = import.meta.env.VITE_API_URL;
const api = {
  userApi,
};

export default api;
