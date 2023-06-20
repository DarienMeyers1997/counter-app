import React from "react";

function Info({ name, color, movies }) {
  return (
    <div>
      <h1>Info</h1>
      <span>
        <h3>Name:</h3>
        <p>{name}</p>
      </span>
      <span>
        <h3>Favorite Color:</h3>
        <p>{color}</p>
      </span>
      <span>
        <h3>Favorite Movies:</h3>
        {movies.map((movie, index) => {
          return (
            <p>
              {index + 1}. {""}
              {movie}
            </p>
          );
        })}
      </span>
    </div>
  );
}

export default Info;
