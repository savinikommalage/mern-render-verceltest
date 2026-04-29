import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <img
        src={book.imageUrl || "https://via.placeholder.com/400x220?text=Book"}
        alt={book.title}
        className="card-image"
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      {/* TODO: Display Description and Genre here */}

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-book/${book._id}`}>Edit</Link>
        {/* TODO: Add Delete Button here */}
      </div>
    </div>
  );
}

export default BookCard;
