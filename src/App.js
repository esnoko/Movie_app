// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//463cf81c

const API_URL = "http://www.omdbapi.com?apikey=463cf81c";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (search, pages = 100) => {
    let allMovies = [];
    for (let page = 1; page <= pages; page++) {
      const response = await fetch(`${API_URL}&s=${search}&page=${page}`);
      const data = await response.json();
      if (data.Search) {
        allMovies = allMovies.concat(data.Search);
      } else {
        break;
      }
    }
    setMovies(allMovies);
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
