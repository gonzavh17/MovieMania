import React from "react";
import "../Assets/Css/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function NavBar({ searchMovies, setSerchKey }) {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-brand-container">

        <span className="nav-bar-icon">
          <FontAwesomeIcon icon={faFilm} />
        </span>
        <p className="movie-mania">Movie Mania</p>
      </div>

    </div>
  );
}

export default NavBar;
