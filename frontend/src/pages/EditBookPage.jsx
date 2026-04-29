import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm.jsx";
import { getBookById, updateBook } from "../api/bookApi.js";

function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await getBookById(id);
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdate = async (formData) => {
    const payload = {
      title: formData.title.trim(),
      author: formData.author.trim(),
      description: formData.description.trim(),
      genre: formData.genre.trim(),
      imageUrl: formData.imageUrl?.trim() || "",
    };

    try {
      await updateBook(id, payload);
      navigate("/");
    } catch (error) {
      console.error("Failed to update book", error.response?.data || error);
      alert(error.response?.data?.error || "Failed to update book");
    }
  };

  if (!book) return <p>Loading book details...</p>;

  return (
    <BookForm
      initialValues={book}
      submitText="Update Book"
      onSubmit={handleUpdate}
    />
  );
}

export default EditBookPage;
