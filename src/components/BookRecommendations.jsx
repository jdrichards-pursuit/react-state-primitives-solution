import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  const [allBooks] = useState(bookData);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [initialRecommendations, setInitialRecommendations] = useState([]);
  const [additionalRecommendations, setAdditionalRecommendations] = useState(
    []
  );
  const [showAdditional, setShowAdditional] = useState(false);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    const genreBooks = allBooks[genre] || [];
    setInitialRecommendations(genreBooks.slice(0, 2));
    setAdditionalRecommendations(genreBooks.slice(2));
    setShowAdditional(false);
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
        {initialRecommendations.length > 0 && (
          <h3>Recommendations for {selectedGenre}:</h3>
        )}
        <ul className="book-list">
          {initialRecommendations.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
        {additionalRecommendations.length > 0 && !showAdditional && (
          <button
            className="more-like-this-button"
            onClick={() => setShowAdditional(true)}
          >
            More Like This
          </button>
        )}
        {showAdditional && (
          <ul className="book-list">
            {additionalRecommendations.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookRecommendations;
