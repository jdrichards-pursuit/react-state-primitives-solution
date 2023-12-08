import React, { useState } from "react";

import RecommendationButtons from "./RecommendationButtons";
import RecommendationsList from "./RecommendationsList";

import bookData from "../books.json"; // Import the data from books.json

import "./BookRecommendations.css";

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
      <RecommendationButtons
        allBooks={allBooks}
        handleGenreSelect={handleGenreSelect}
      />
      <RecommendationsList
        selectedGenre={selectedGenre}
        recommendations={recommendations}
      />
    </div>
  );
};

export default BookRecommendations;
