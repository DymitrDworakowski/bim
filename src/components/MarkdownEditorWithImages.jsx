import { useState } from "react";

function MarkdownEditorWithImages({ content, setContent }) {
  const [uploading, setUploading] = useState(false);

  // Обробка завантаження зображення
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "blog_upload"); // для Cloudinary

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      // вставляємо URL у контент Markdown
      setContent(content + `\n![Opis obrazu](${data.secure_url})\n`);
    } catch (err) {
      console.error("Błąd przy uploadzie obrazka:", err);
      alert("Nie udało się przesłać obrazka");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="markdown-editor flex flex-col gap-2">
      <textarea
        className="border rounded p-2 w-full h-64"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Wpisz treść bloga..."
      />
      <label className="flex gap-2 items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={uploading}
        />
        <span>{uploading ? "Ładowanie..." : "Dodaj obrazek"}</span>
      </label>
    </div>
  );
}

export default MarkdownEditorWithImages;
