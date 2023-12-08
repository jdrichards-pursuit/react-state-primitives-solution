import React from "react";

const RecommendationsList = ({ selectedGenre, recommendations }) => {
  return (
    <div>
      {recommendations.length > 0 && (
        <h3>Recommendations for {selectedGenre}:</h3>
      )}
      <ul className="book-list">
        {recommendations.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
