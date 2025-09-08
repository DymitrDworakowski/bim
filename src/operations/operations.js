import axios from "axios";

// створюємо інстанс axios
export const api = axios.create({
  baseURL: "https://bim-rest-api.onrender.com/api"
});

// GET 
export const fetchPublicBlogs = async () => {
  const { data } = await api.get("/blog/public"); // ⚡ новий ендпоінт
  return data;
};