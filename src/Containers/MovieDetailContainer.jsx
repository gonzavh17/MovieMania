import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../Components/MovieDetailCard";

function MovieDetailContainer() {

  const { id } = useParams()

/* console.log({id}) */

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
  const fetchMovieDetail = async (movieId) => {
    const { data } = await axios.get(`${apiUrl}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
        append_to_response: "videos"
      },
    });
    
    if(data.videos && data.videos.results){
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      )
      setTrailer(trailer ? trailer : data.videos.results[0])
    }

    setMovie(data)

    return data;
  };

  const selectMovie = async(movie) => {
    fetchMovieDetail(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }
  
  const fetchMovies = async (movieId) => {
    const movie = await fetchMovieDetail(movieId);
    setMovie(movie);
  };

  useEffect(() => {
    fetchMovies(id);
  }, [id]);

  

  return (
    <div>
      <MovieDetailCard movie={movie} trailer={trailer}/>
    </div>
  );
}

export default MovieDetailContainer;
