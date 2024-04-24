import React, { useState } from "react";
import classes from "./Row.module.css";
import chevronRight from "../assets/Chevron-right.png";
import pingItem from "../assets/PngItem.png";
import imdb from "../assets/imdb.png";
import poster from "../assets/Poster.png";
import chevronRight1 from "../assets/Chevron-right(1).png";
import chevronLeft from "../assets/Chevron-leftt.png";

const Row = ({ title, isLargeRow = false }) => {
  const [movies, setMovies] = useState();

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className={classes.row}>
      <div className={classes["row-title"]}>
        <h1>Featured Movie</h1>
        <div className={classes["see-more-container"]}>
          <p>See more</p>
          <img src={chevronRight} alt="Right-arrow" />
        </div>
      </div>

      <div className={classes["poster-row"]}>
        {/* <div></div> */}
        <img src={chevronLeft} className={classes["arrow-prev"]} alt="left-arrow" />
        <img src={chevronRight1} className={classes["arrow-next"]} alt="right-arrow" />
        <div className={classes["row-posters-container"]}>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
          <div className={classes["row-poster"]}>
            <img src={poster} alt="Poster" className={classes.poster} />
            <p className={classes["poster-location"]}>USA, 2016 - Current</p>
            <p className={classes["poster-title"]}>Stranger Things</p>
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
            <p className={classes["poster-genre-title"]}>
              Action, Adventure, Horror
            </p>
          </div>
        </div>
        {/* <div className={classes["row-posters"]}>
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  className={
                    classes[`row-poster ${isLargeRow && "row-posterLarge"}`]
                  }
                />
                
              )
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Row;
