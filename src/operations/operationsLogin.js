import axios from "axios";

// створюємо інстанс axios
export const api = axios.create({
  baseURL: "https://bim-rest-api.onrender.com/api",
});

// =============== AUTH ===============
export const login = async (values) => {
  try {
    const { data } = await api.post("/auth/login", {
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    return data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = async (token) => {
  await api.post(
    "/auth/logout",
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  localStorage.removeItem("token");
};

// =============== BLOGS ===============

// ✅ публічні блоги (для користувачів сайту)
export const getBlogs = async () => {
  const { data } = await api.get("/blog/public");
  return data;
};

// ✅ усі блоги (для адмінки)
export const getAdminBlogs = async (token) => {
  const { data } = await api.get("/blog", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// один блог (може бути як публічний, так і адмінський)
export const getBlog = async (id) => {
  const { data } = await api.get(`/blog/${id}`);
  return data;
};

// створення блогу
export const createBlog = async ({ title, content, publishDate, isPublished }, token) => {
  const res = await api.post(
    "/blog",
    { title, content, publishDate, isPublished },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data;
};

// оновлення блогу
export const updateBlog = async ({ id, data, token }) => {
  const res = await api.put(`/blog/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// видалення блогу
export const deleteBlog = async (id, token) => {
  const res = await api.delete(`/blog/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
