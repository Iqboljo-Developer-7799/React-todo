import React from "react";
import "./status.css";

const Status = () => {
  return (
    <div className="status">
      <h2>
        Available Movies: <span className="movies-count">0</span>
      </h2>
      <h3>
        Liked Movies: <span className="movies-liked">0</span>
      </h3>
    </div>
  );
};

export default Status;
