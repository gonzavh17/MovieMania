import React from "react";
import "../Assets/Css/Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SimpleSlider from "../Components/SimpleSlIder"

function Filter({ searchMovies, setSerchKey }) {
  return (
    <div className="form-container">


      <p className="form-title">Welcome to MovieMania!</p>
      <p>Millions of Movies, Series and TV shows for you.</p>
      <p>Explore Now!</p>

      <form action="" onSubmit={searchMovies} className="form">
        <input
          type="text"
          placeholder="serch"
          className="form-input"
          onChange={(e) => setSerchKey(e.target.value)}
        />
        <button className="form-search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default Filter;
