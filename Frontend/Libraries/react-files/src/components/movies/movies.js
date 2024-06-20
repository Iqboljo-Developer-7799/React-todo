import React from "react";
import "./movies.css";
import Movie from "../movie/movie";

const Movies = ({ data }) => {
  return (
    <div className="movies">
      {data.map((data, index) => {
        <Movie key={index} data={data} />;
      })}
      {/* <Movie data={data} />; */}
    </div>
  );
};

export default Movies;
