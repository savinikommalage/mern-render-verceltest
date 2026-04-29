import { useEffect, useState } from "react";
import { getBooks } from "../api/bookApi.js";
import BookCard from "../components/BookCard.jsx";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  // TODO: Implement handleDelete logic here
  const deleteBook = async (id) => {
  await axios.delete(`/api/books/${id}`);
  setBooks(books.filter(book => book._id !== id));
};

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Book Details</h1>
        <p>View, manage, edit, and remove books from the library.</p>
      </div>

      {loading ? (
        <p>Loading books...</p>
      ) : books.length === 0 ? (
        <p>No books available. Add a new book from the menu.</p>
      ) : (
        <div className="grid">
          {books.map((book) => (
            <BookCard book={book} onDelete={deleteBook} />
            // TODO: pass onDelete prop to BookCard
            
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
