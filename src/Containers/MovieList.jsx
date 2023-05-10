import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import Filter from "../Components/Filter";
import "../Assets/Css/MovieCard.css";
import "../Components/Carousel";
import Carousel from "../Components/Carousel";

function MovieList() {
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "71c8d5415c039b01dbbaf61ee3adc45c";
  const imagePath = "https://image.tmdb.org/t/p/original";
  const urlImage = "https://image.tmdb.org/t/p/original";

  /* variables de estado */
  const [movies, setMovies] = useState([]);
  const [searchKey, setSerchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "loading movies" });
  const [playing, setPlaying] = useState(false);

  /* llamado a la api */
  const fetchMovies = async (serchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${apiUrl}/${type}/movie`, {
      params: {
        api_key: apiKey,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  const firstThreeMovies = movies.slice(0, 3);

  console.log(firstThreeMovies);

  return (
    <div className="container">
      <div className="movie-filter-none">
        <Filter searchMovies={searchMovies} setSerchKey={setSerchKey} />
      </div>

      <div className="carousel">
        <Carousel movies={firstThreeMovies} />
      </div>

      <div className="movie-card">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
