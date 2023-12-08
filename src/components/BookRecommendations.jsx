import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json"; // Import the data from books.json

const BookRecommendations = () => {
  // State for all book data
  const [allBooks, setAllBooks] = useState(bookData);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setRecommendations(allBooks[genre] || []);
  };

  return (
    <div className="book-recommendations">
      <h2>Book Recommendations</h2>
      <div className="genre-buttons">
        {Object.keys(allBooks).map((genre) => (
          <button key={genre} onClick={() => handleGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div>
        <h3>Recommendations for {selectedGenre}:</h3>
        <ul className="book-list">
          {recommendations.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;
