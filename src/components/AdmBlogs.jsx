import MDEditor from "@uiw/react-md-editor";
import { Toaster } from "react-hot-toast";
function AdmBlogs({
  handleLogout,
  blogs,
  validateForm,
  createMutation,
  deleteMutation,
  editingBlog,
  setEditingBlog,
  editData,
  setEditData,
  newBlog,
  updateMutation,
  handleEditClick,
  setNewBlog,
}) {
  
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
            createMutation.mutate({ ...newBlog, isPublished: false });
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

        <MDEditor
          className="bg-blue"
          value={newBlog.content}
          onChange={(value) => setNewBlog({ ...newBlog, content: value || "" })}
          height={300}
          preview="edit"
        />

        {/* 🗓 дата публікації */}
        <label className="block text-sm font-medium text-gray-700">
          Data publikacji:
        </label>
        <input
          type="datetime-local"
          value={newBlog.publishDate || ""}
          onChange={(e) =>
            setNewBlog({ ...newBlog, publishDate: e.target.value })
          }
          className="border p-2 rounded"
        />
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="isPublished"
            checked={newBlog.isPublished || false}
            onChange={(e) =>
              setNewBlog({ ...newBlog, isPublished: e.target.checked })
            }
          />
          <label htmlFor="isPublished" className="text-sm">
            Opublikowany
          </label>
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
                    onChange={(value) =>
                      setEditData({ ...editData, content: value || "" })
                    }
                    height={300}
                    preview="edit"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Długość treści: {editData.content.length} znaków
                  </p>
                </div>
                <input
                  type="datetime-local"
                  value={editData.publishDate || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, publishDate: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <div className="mb-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="editIsPublished"
                    checked={editData.isPublished || false}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        isPublished: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="editIsPublished" className="text-sm">
                    Opublikowany
                  </label>
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
                <small className="text-gray-500">
                  Autor: {blog.author || "Admin"}
                </small>
                <p>
                  Data planowanej publikacji:{" "}
                  {new Date(blog.publishDate).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                  >
                    Edytuj
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("Czy na pewno chcesz usunąć ten blog?")
                      ) {
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

export default AdmBlogs;
