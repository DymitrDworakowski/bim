import axios from "axios";

// створюємо інстанс axios
export const api = axios.create({
  baseURL: "https://bim-rest-api.onrender.com/api"
});

// GET всі блоги
export const getBlogs = async () => {
  const { data } = await api.get("/blog");
  console.log(data)
  return data;
};