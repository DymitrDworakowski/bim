import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../operations/operations";

function Blogs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  console.log(data);

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  return (
    <div className=" flex flex-col gap-4 justify-center bg-slate-200 p-4">
        <h1>Blogy</h1>
      {data.map((blog) => (
        <div key={blog._id} className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>Data publikacji {blog.publishDate}</p>
          <small>Autor: {blog.author}</small>
        </div>
      ))}
    </div>
  );
}
export default Blogs;
