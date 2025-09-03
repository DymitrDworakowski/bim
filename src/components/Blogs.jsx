import { useQuery} from "@tanstack/react-query";
import { getBlogs } from "../operations/operations";

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

  return (
    <div className="flex flex-col gap-4 justify-center bg-slate-200 p-4">
      <h1>Blogi</h1>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-item bg-white p-3 rounded shadow">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Data publikacji: {blog.publishDate}</p>
            <small>Autor: {blog.author}</small>
          </div>
        ))
      ) : (
        <p>Brak blogów do wyświetlenia</p>
      )}
    </div>
  );
}

export default Blogs;
