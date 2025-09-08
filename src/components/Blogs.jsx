import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../operations/operations";
import Markdown from "markdown-to-jsx";

function Blogs() {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd podczas ładowania blogów</p>;

  // ✅ фільтруємо тільки опубліковані або з датою <= now
  const visibleBlogs = blogs?.filter(
    (blog) =>
      blog.isPublished === true || new Date(blog.publishDate) <= new Date()
  );

  return (
    <div className="flex flex-col gap-4 justify-center bg-slate-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Blogi</h1>
      {visibleBlogs && visibleBlogs.length > 0 ? (
        visibleBlogs.map((blog) => (
          <div
            key={blog._id}
            className="blog-item bg-white p-6 rounded shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {blog.title}
            </h2>

            {/* Використання Markdown */}
            <div className="prose max-w-none mb-4">
              <Markdown>{blog.content}</Markdown>
            </div>

            <div className="text-sm text-gray-600 border-t pt-3">
              <p>
                Data publikacji:{" "}
                {new Date(blog.publishDate).toLocaleDateString("pl-PL")}
              </p>
              <small>Autor: {blog.author || "Admin"}</small>
            </div>
          </div>
        ))
      ) : (
        <p>Brak blogów do wyświetlenia</p>
      )}
    </div>
  );
}

export default Blogs;
