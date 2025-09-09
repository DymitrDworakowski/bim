import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlog } from "../operations/operations";
import Markdown from "markdown-to-jsx";
import FullPageLoader from "./FullPageLoader";

function BlogDetail() {
  const { slug } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlog(slug),
    enabled: !!slug,
  });

  if (isLoading) return <FullPageLoader />;
  if (error) return <p>Błąd podczas ładowania bloga</p>;
  if (!blog) return <p>Nie znaleziono bloga</p>;

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(blog.publishDate).toLocaleDateString("pl-PL")} •{" "}
        {blog.author || "Admin"}
      </p>
      <div className="prose">
        <Markdown>{blog.content}</Markdown>
      </div>
    </article>
  );
}

export default BlogDetail;
