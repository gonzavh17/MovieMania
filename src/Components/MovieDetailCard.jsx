import React, { useState } from "react";
import "../Assets/Css/MovieDetailCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from "react-youtube";
import {
  faStar,
  faThumbsUp,
  faThumbsDown,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

function MovieDetailCard({ movie, trailer }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const urlImage = "https://image.tmdb.org/t/p/original";
  const [playing, setPlaying] = useState(true);

  console.log(movie);

  return (
    <div className="asd">

      {/* <div className="detail-backdrop-container">
        <img className="detail-backdrop" src={`${imagePath}${movie.backdrop_path}`}/>
      </div> */}

      <div className="movie-detail-parent">
        <div className="child-1">
          <h2 className="detail-title">
            {movie.title}(
            {movie.release_date && movie.release_date.split("-")[0]})
          </h2>
          <p className="detail-original-title">
            Original Title: {movie.original_title}
          </p>
          <div className="detail-information">
            <p className="detail-runtime detail-information-child">
              {movie.runtime} min
            </p>
          </div>
        </div>
        <div className="child-2">
          <div className="detail-score-container">
            <p className="detail-score detail-text">
              <FontAwesomeIcon icon={faStar} />
              {(movie.vote_average / 1).toFixed(1)}/10
            </p>
            <p className="detail-vote detail-text">
              <FontAwesomeIcon icon={faStar} />
              Rate me
            </p>
            <p className="detail-text">
              <FontAwesomeIcon icon={faFilm} />
              {movie.popularity}
            </p>
          </div>
        </div>
        <div className="child-3">
          <img
            src={`${urlImage + movie.poster_path}`}
            alt=""
            className="detail-img"
          />
        </div>
        <div className="child-4">
          <div>
            <div className="detail-movie-trailer">
              {movie ? (
                <div className="viewtrailer">
                  {playing ? (
                    <>
                      <YouTube
                        videoId={trailer ? trailer.key : null}
                        className="reproductor-container"
                        containerClassName={"youtube-container amru"}
                      />
                    </>
                  ) : (
                    <div className="container">
                      <div className="">
                        {trailer
                          ? "Trailer is avaiable"
                          : "Sorry, no trailer available"}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
          <div className="detail-genre-container">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span className="detail-genre" key={genre.id}>
                  {genre.name}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="detail-overview-parent">
        <div className="detail-overview-container">
          <p className="detail-overview">{movie.overview}</p>
        </div>
        <div className="detail-status-container">
          <div className="detail-facts">
            <p className="detail-facts-title">Stauts:</p>
            <p>{movie.status}</p>
          </div>
          <div className="detail-facts">
            <p className="detail-facts-title">Lenguage:</p>
            {movie.spoken_languages &&
              movie.spoken_languages.map((language) => (
                <span key={language.iso_639_1}>{language.name}</span>
              ))}
          </div>
          <div className="detail-facts">
            <p className="detail-facts-title">Lenguage:</p>
            <p>Budget:</p>
            <p>{movie.budget}</p>
          </div>
          <div className="detail-facts">
            <p className="detail-facts-title">Production companies:</p>
            {movie.production_companies &&
              movie.production_companies.map((companies) => (
                <span key={companies.name}>{companies.name}</span>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default MovieDetailCard;

{
  /* <div className="detail-parent">
        <div className="detail-img-container">
          <h2 className="detail-title">
            {movie.title}(
            {movie.release_date && movie.release_date.split("-")[0]})
          </h2>
          <p className="detail-original-title">
            Original Title: {movie.original_title}
          </p>
          <div className="detail-information">
            <p className="detail-runtime detail-information-child">
              {movie.runtime} min
            </p>
          </div>
          <img
            src={`${urlImage + movie.poster_path}`}
            alt=""
            className="detail-img"
          />
        </div>
        <div className="detail-left-grid">
          <div className="detail-genre-container">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span className="detail-genre" key={genre.id}>
                  {genre.name}
                </span>
              ))}
          </div>
          <div className="detail-trailer-container">
            <div className="detail-trailer">
              <div>
                <div className="detail-movie-trailer">
                  {movie ? (
                    <div className="viewtrailer">
                      {playing ? (
                        <>
                          <YouTube
                            videoId={trailer ? trailer.key : null}
                            className="reproductor container"
                            containerClassName={"youtube-container amru"}
                          />
                        </>
                      ) : (
                        <div className="container">
                          <div className="">
                            {trailer
                              ? "Trailer is avaiable"
                              : "Sorry, no trailer available"}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="detail-score-container">
              <p className="detail-score ">
                <FontAwesomeIcon icon={faStar} />
                {(movie.vote_average / 1).toFixed(1)}/10
              </p>
              <p className="detail-vote detail-text">
                <FontAwesomeIcon icon={faStar} />
                Rate me
              </p>
              <p className="detail-text">
                <FontAwesomeIcon icon={faFilm} />
                {movie.popularity}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-overview-parent">
        <div className="detail-overview-container">
          <p className="detail-overview">{movie.overview}</p>
        </div>
        <div className="detail-status-container">
          <div className="detail-facts">
            <p className="detail-facts-title">Stauts:</p>
            <p>{movie.status}</p>
          </div>
          <div className="detail-facts">
            <p className="detail-facts-title">Lenguage:</p>
            {movie.spoken_languages &&
              movie.spoken_languages.map((language) => (
                <span key={language.iso_639_1}>{language.name}</span>
              ))}
          </div>
          <div className="detail-facts">
            <p className="detail-facts-title">Lenguage:</p>
            <p>Budget:</p>
            <p>{movie.budget}</p>
          </div>
          <div className="detail-facts">
            <p className="detail-facts-title">Production companies:</p>
            {movie.production_companies &&
              movie.production_companies.map((companies) => (
                <span key={companies.name}>{companies.name}</span>
              ))}
          </div>
        </div>
      </div>

      <p>{movie.director}</p> */
}
