import React from "react";

const RecommendationButtons = ({ allBooks, handleGenreSelect }) => {
  return (
    <div className="genre-buttons">
      {Object.keys(allBooks).map((genre) => (
        <button key={genre} onClick={() => handleGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default RecommendationButtons;
