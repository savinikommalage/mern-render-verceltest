import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm.jsx";
import { createBook } from "../api/bookApi.js";

function AddBookPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    const payload = {
      title: formData.title.trim(),
      author: formData.author.trim(),
      description: formData.description.trim(),
      genre: formData.genre.trim(),
      imageUrl: formData.imageUrl?.trim() || "",
    };

    try {
      await createBook(payload);
      navigate("/");
    } catch (error) {
      console.error("Failed to create book", error.response?.data || error);
      alert(error.response?.data?.error || "Failed to create book");
    }
  };

  return <BookForm submitText="Add Book" onSubmit={handleCreate} />;
}

export default AddBookPage;
