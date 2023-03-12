import { useEffect, useState } from "react";
import "./Banner.css";
export default function Banner() {
  // function truncate(string, n) {
  //   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  // }

  return (
    <>
      <header className="banner">
        {/* <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </div> */}
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
}
