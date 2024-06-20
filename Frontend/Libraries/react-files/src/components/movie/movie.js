import React from "react";

const Movie = (data) => {
  console.log(data.data);
  return (
    <div className="movie">
      <h2 className="movie-name">Sherlock Homes</h2>
      <p className="movie-views">999</p>
      <button className="movie-favourite">🍪</button>
      <button className="movie-delete">🆇</button>
    </div>
  );
};

export default Movie;
