import axios from "axios";

// створюємо інстанс axios з базовим URL
export const api = axios.create({
  baseURL: "https://bim-rest-api.onrender.com/api",
});

// збереження/видалення токена в headers і localStorage
// export const setAuthToken = (token) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     localStorage.setItem("token", token);
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//     localStorage.removeItem("token");
//   }
// };

// // 🔑 Логін
// export const login = async (credentials) => {
//   const { data } = await api.post("/admin/login", credentials);
//   // відповідає твій бекенд — має віддати { token }
//   if (data.token) {
//     setAuthToken(data.token);
//   }
//   return data;
// };

export const login = async (values) => {
  try {
    const { data } = await api.post("/auth/login", {
      name: values.name,
      email: values.email,
      password: values.password,
    });

    // 🔑 токен зберігаємо у localStorage
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
//LogOut
export const logout = async (token) => {
  await api.post(
    "/auth/logout",
    {}, // тіло пусте
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  localStorage.removeItem("token"); // ⚡ правильно видаляємо
};

// GET всі блоги
export const getBlogs = async () => {
  const { data } = await api.get("/blog");
  return data;
};

// GET один блог
export const getBlog = async (id) => {
  const { data } = await api.get(`/blog/${id}`);
  return data;
};

// POST новий блог
export const createBlog = async ({ title, content }, token) => {
  console.log(title, content);
  const res = await api.post(
    "/blog",
    { title, content }, // ✅ правильна структура
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(res.data);
  return res.data;
};

// PUT оновлення блогу
export const updateBlog = async ({ id, data, token }) => {
  const res = await api.put(`/blog/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// DELETE блог
export const deleteBlog = async (id, token) => {
  const res = await api.delete(`/blog/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
