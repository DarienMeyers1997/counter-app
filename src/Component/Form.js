import React, { useState } from "react";
import Info from "./Info";

function Form() {
  const [name, setName] = useState("");
  const [favoriteColor, setFavortieColor] = useState(["", "", ""]);
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleColorChange = (e) => {
    setFavortieColor(e.target.value);
  };

  const handleMovieChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFavoriteMovie = [...favoriteMovie];
    if (name === "movie1") {
      return (newFavoriteMovie[0] = value);
    }
    if (name === "movie2") {
      return (newFavoriteMovie[1] = value);
    }
    if (name === "movie3") {
      return (newFavoriteMovie[2] = value);
    }
    setFavoriteMovie(newFavoriteMovie);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault(setSubmitted(true));
  };

  return (
    <div>
      <h1>Form</h1>
      <submit onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="color">Favorite Color:</label>
        <input
          type="text"
          name="color"
          value={favoriteColor}
          onChange={handleColorChange}
        />
        <br />
        <label htmlFor="movie">Favorite Movie:</label>
        <input
          type="text"
          name="movie"
          value={favoriteMovie}
          onChange={handleMovieChange}
        />
        <br />
        <label htmlFor="movie1">Movie1</label>
        <input name="movie1" onChange={handleMovieChange} />
        <br />
        <label htmlFor="movie2">Movie2</label>
        <input htmlFor="movie2" onChange={handleMovieChange} />
        <br />
        <label htmlFor="movie3">Movie3</label>
        <input htmlFor="movie3" onChange={handleMovieChange} />
        <button>Save Me</button>
      </submit>
      {submitted && (
        <Info name={name} color={favoriteColor} movie={favoriteMovie} />
      )}
    </div>
  );
}

export default Form;
