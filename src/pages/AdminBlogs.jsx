import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  logout,
} from "../operations/operationsLogin";
import { useState } from "react";

function AdminBlogs() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      if (token) {
        await logout(token);
      }
      navigate("/"); // редірект на сторінку логіну
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  // ➕ додавання
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const createMutation = useMutation({
    mutationFn: (payload) => createBlog(payload, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      setNewBlog({ title: "", content: "" });
    },
  });

  // 🗑 видалення
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteBlog(id, token),
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  // ✏️ редагування
  const [editingBlog, setEditingBlog] = useState(null);
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateBlog({ id, data, token }),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      setEditingBlog(null);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📑 Paneł zarządzania blogiem</h1>

      {/* Форма для створення */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMutation.mutate(newBlog);
        }}
        className="flex flex-col gap-2 bg-white p-4 rounded shadow-md mb-6"
      >
        <input
          type="text"
          placeholder="Nazwa"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Napisz tu kontent"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Dodaj blog
        </button>
      </form>

      {/* Список блогів */}
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white p-4 rounded shadow-md flex flex-col gap-2"
          >
            {editingBlog === blog._id ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateMutation.mutate({
                    id: blog._id,
                    data: { title: newBlog.title, content: newBlog.content },
                  });
                }}
                className="flex flex-col gap-2"
              >
                <input
                  type="text"
                  defaultValue={blog.title}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, title: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <textarea
                  defaultValue={blog.content}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, content: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
                  >
                    Zapisać
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingBlog(null)}
                    className="bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-500"
                  >
                    Cofnąć
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p>{blog.content}</p>
                <small>Autor: {blog.author || "Admin"}</small>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setEditingBlog(blog._id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                  >
                    Edytuj
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(blog._id)}
                    className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                  >
                    Usuń
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-800 text-white py-1 px-3 rounded hover:bg-red-700 m-4 "
          onClick={handleLogout}
        >
          Wyloguj się
        </button>
      </div>
    </div>
  );
}

export default AdminBlogs;
