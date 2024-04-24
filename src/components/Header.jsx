import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "../assets/Logo.png";
import pingItem from "../assets/PngItem.png";
import imdb from "../assets/imdb.png";
import icon from "../assets/Icon.png";
import menu from "../assets/Menu4.png";
import search from "../assets/Search.png";

import requests from "./request";
import axios from "./axios";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState();

  async function fetchData() {
    const request = await axios.get(requests.fetchTrending);

    setMovies(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );

    return request;
  }

  console.log(movies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={classes.header}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.navbar}>
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <form>
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img src={search} alt="Search-icon" onClick={fetchData} />
        </form>

        <div className={classes["signin-container"]}>
          <p>Sign in</p>
          <div className={classes["signin-logo"]}>
            <img src={menu} alt="" />
          </div>
        </div>
      </div>

      <div className={classes["header-description"]}>
        <div className={classes["header-description-container"]}>
          <div>
            <h1 className={classes["header-title"]}>
              {movies.title || movies.name || movies.original_name}
            </h1>
            <div className={classes["header-rating"]}>
              <div className={classes["header-rating-1"]}>
                <img src={imdb} alt="imdb-logo" />
                <p>86 / 100</p>
              </div>
              <div className={classes["header-rating-2"]}>
                <img src={pingItem} alt="imdb-logo" />
                <p>97%</p>
              </div>
            </div>
          </div>

          <div className={classes["header-overview"]}>
            {movies.overview}
          </div>

          <div className={classes["header-button"]}>
            <button type="button">
              <img src={icon} alt="play-icon" />
              WATCH TRAILER
            </button>
          </div>
        </div>

        <div className={classes["header-numbers"]}>
          <p>
            <span className={classes.space}></span> 1
          </p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
