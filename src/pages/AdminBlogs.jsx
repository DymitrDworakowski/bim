import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  getAdminBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  logout,
} from "../operations/operationsLogin";
import { useState } from "react";

import AdmBlogs from "../components/AdmBlogs";

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
    queryKey: ["adminBlogs"],
    queryFn: () => getAdminBlogs(token), // ⚡ адмінські блоги
  });

  // ➕ додавання
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    publishDate: new Date().toISOString(), // ⚡ можна одразу дати поле дати
    isPublished: false, // ⚡ старт як чернетка
  });

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
      queryClient.invalidateQueries(["adminBlogs"]); // ⚡ перезапитуємо адмінські блоги
      setNewBlog({
        title: "",
        content: "",
        publishDate: "",
        isPublished: false,
      });
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
  const [editData, setEditData] = useState({
    title: "",
    content: "",
    publishDate: "",
    isPublished: false,
  });

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
    setEditData({
      title: blog.title,
      content: blog.content,
      publishDate: blog.publishDate,
      isPublished: blog.isPublished,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <AdmBlogs
        handleLogout={handleLogout}
        blogs={blogs}
        validateForm={validateForm}
        createMutation={createMutation}
        deleteMutation={deleteMutation}
        editingBlog={editingBlog}
        setEditingBlog={setEditingBlog}
        editData={editData}
        setEditData={setEditData}
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        updateMutation={updateMutation}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}

export default AdminBlogs;
