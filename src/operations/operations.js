import axios from "axios";

axios.defaults.baseURL = "https://bim-rest-api.onrender.com/api";



export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const api = axios;


// GET всі блоги
export const getBlogs = async () => {
  const { data } = await api.get('/blog');
  return data;
};

// GET один блог
export const getBlog = async (id) => {
  const { data } = await api.get(`/blog/${id}`);
  return data;
};

// POST новий блог
export const createBlog = async (payload) => {
  const { data } = await api.post('/blog', payload);
  return data;
};

// PATCH оновлення
export const updateBlog = async (id, payload) => {
  const { data } = await api.patch(`/blog/${id}`, payload);
  return data;
};

// DELETE
export const deleteBlog = async (id) => {
  const { data } = await api.delete(`/blog/${id}`);
  return data;
};
