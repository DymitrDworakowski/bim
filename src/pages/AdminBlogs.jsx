import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  logout,
} from "../operations/operationsLogin";
import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';

function AdminBlogs() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");

  // LogOut
  const handleLogout = async () => {
    try {
      if (token) {
        await logout(token);
      }
      navigate("/");
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

  const validateForm = () => {
    if (newBlog.title.length < 3) {
      toast.error("Nazwa za krótka");
      return false;
    } else if (newBlog.content.length < 20) {
      toast.error("Kontentu zbyt mało");
      return false;
    }
    return true;
  };

  const createMutation = useMutation({
    mutationFn: (payload) => createBlog(payload, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      setNewBlog({ title: "", content: "" });
      toast.success("Nowy blog dodany!");
    },
    onError: (error) => {
      toast.error("Błąd podczas dodawania bloga");
      console.error("Create error:", error);
    },
  });

  // 🗑 видалення
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteBlog(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog usunięty!");
    },
    onError: (error) => {
      toast.error("Błąd podczas usuwania bloga");
      console.error("Delete error:", error);
    },
  });

  // ✏️ редагування
  const [editingBlog, setEditingBlog] = useState(null);
  const [editData, setEditData] = useState({ title: "", content: "" });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateBlog({ id, data, token }),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      setEditingBlog(null);
      setEditData({ title: "", content: "" });
      toast.success("Blog zaktualizowany!");
    },
    onError: (error) => {
      toast.error("Błąd podczas aktualizacji bloga");
      console.error("Update error:", error);
    },
  });

  const handleEditClick = (blog) => {
    setEditingBlog(blog._id);
    setEditData({ title: blog.title, content: blog.content });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📑 Panel zarządzania blogiem</h1>
      <div>
        <Toaster />
      </div>

      {/* Форма для створення */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (validateForm()) {
            createMutation.mutate(newBlog);
          }
        }}
        className="flex flex-col gap-4 bg-white p-4 rounded shadow-md mb-6"
      >
        <input
          type="text"
          placeholder="Nazwa bloga"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="border p-2 rounded"
          required
        />
        
        {/* MD Editor для контенту */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Treść bloga:
          </label>
          <MDEditor
            value={newBlog.content}
            onChange={(value) => setNewBlog({ ...newBlog, content: value || "" })}
            height={300}
            preview="edit"
          />
          <p className="text-sm text-gray-500 mt-1">
            Długość treści: {newBlog.content.length} znaków
            {newBlog.content.length < 20 && " (wymagane minimum 20 znaków)"}
          </p>
        </div>
        
        <button
          type="submit"
          disabled={createMutation.isLoading}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
        >
          {createMutation.isLoading ? "Dodawanie..." : "Dodaj blog"}
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
                    data: editData,
                  });
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                
                {/* MD Editor для редагування */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Treść bloga:
                  </label>
                  <MDEditor
                    value={editData.content}
                    onChange={(value) => setEditData({ ...editData, content: value || "" })}
                    height={300}
                    preview="edit"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Długość treści: {editData.content.length} znaków
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={updateMutation.isLoading}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    {updateMutation.isLoading ? "Zapisywanie..." : "Zapisać"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingBlog(null);
                      setEditData({ title: "", content: "" });
                    }}
                    className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                  >
                    Cofnąć
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <div className="prose max-w-none border-l-4 border-gray-200 pl-4 py-2 bg-gray-50 rounded">
                  <MDEditor.Markdown source={blog.content} />
                </div>
                <small className="text-gray-500">Autor: {blog.author || "Admin"}</small>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                  >
                    Edytuj
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Czy na pewno chcesz usunąć ten blog?")) {
                        deleteMutation.mutate(blog._id);
                      }
                    }}
                    disabled={deleteMutation.isLoading}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:bg-gray-400"
                  >
                    {deleteMutation.isLoading ? "Usuwanie..." : "Usuń"}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <button
          className="bg-red-800 text-white py-2 px-6 rounded hover:bg-red-700"
          onClick={handleLogout}
        >
          Wyloguj się
        </button>
      </div>
    </div>
  );
}

export default AdminBlogs;