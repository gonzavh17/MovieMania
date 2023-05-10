import React from "react";
import "../Assets/Css/MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const urlImage = "https://image.tmdb.org/t/p/original";


  return (
    <div>



      <div className="movie-card-container">
        <div className="movie-card-parent">
          <img src={`${urlImage + movie.poster_path}`} alt="" className="img" />

          <Link to={`/movie/${movie.id}`} className="custom-link">
          <p className="movie-title">{movie.title}</p>
          </Link>

         
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
