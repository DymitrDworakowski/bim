import { useQuery } from "@tanstack/react-query";
import { fetchPublicBlogs } from "../operations/operations";
import Markdown from "markdown-to-jsx";
import FullPageLoader from "./FullPageLoader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Blogs() {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchPublicBlogs,
  });

  if (isLoading) return <FullPageLoader />;
  if (error)
    return (
      <p className="text-red-500 text-center mt-10">
        Błąd podczas ładowania blogów
      </p>
    );

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[rgb(250,150,0)] mb-10">
          Blogi
        </h1>

        {blogs && blogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog._id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h2>

                {/* Markdown content */}
                <div className="prose max-w-none text-gray-700 flex-grow">
                  <Markdown>{blog.content.slice(0, 200) + "..."}</Markdown>
                </div>

                <div className="text-sm text-gray-600 border-t pt-3 mt-4">
                  <p>
                    Data publikacji:{" "}
                    {new Date(blog.publishDate).toLocaleDateString("pl-PL", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <small className="block mt-1">
                    Autor:{" "}
                    <span className="font-medium">
                      {blog.author || "Admin"}
                    </span>
                  </small>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-4 inline-block text-blue-600 hover:underline"
                  >
                    Czytaj więcej →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Brak blogów do wyświetlenia
          </p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
