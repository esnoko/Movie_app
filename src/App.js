// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//463cf81c

const API_URL = "http://www.omdbapi.com?apikey=463cf81c";
const movie1 = {
  Title: "In Her Shoes",
  Year: "2005",
  imdbID: "tt0388125",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjVlZGExYjMtM2VmMS00YzRmLWJiM2QtNzNmNmFjYjNlZjg5XkEyXkFqcGc@._V1_SX300.jpg",
};
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Her");
  }, []);

  return (
    <div className="app">
      <h1>MovieHive</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="In Her Shoes"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
