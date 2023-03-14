import { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [loaded, setLoaded] = useState(false);
  const API_KEY = "f025efcd2e89d572e5a3ac07a0ce13d3";
  const [clickedMovieId, setClickedMovieId] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef(null);

  async function fetchVideoId(movieId) {
    const response = await axios.get(
      `/movie/${movieId}/videos?api_key=${API_KEY}&append_to_response=videos`
    );
    const video = response.data.results.find(
      (result) => result.name === "Official Trailer"
    );
    const videoId = video ? video.key : response.data.results[0]?.key || null;
    console.log(videoId);
    setVideoId(videoId);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function handleLeftClick() {
    const container = rowRef.current;
    if (container) {
      const scrollStep = -200;
      const start = container.scrollLeft;
      let currentTime = 0;

      function animateScroll() {
        currentTime += 10;
        const newPosition = Math.easeInOutQuad(
          currentTime,
          start,
          scrollStep,
          500
        );
        container.scrollLeft = newPosition;
        setScrollPosition(container.scrollLeft);

        if (currentTime < 500) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }
  }

  function handleRightClick() {
    const container = rowRef.current;
    if (container) {
      const scrollStep = 200;
      const start = container.scrollLeft;
      let currentTime = 0;

      function animateScroll() {
        currentTime += 10;
        const newPosition = Math.easeInOutQuad(
          currentTime,
          start,
          scrollStep,
          500
        );
        container.scrollLeft = newPosition;
        setScrollPosition(container.scrollLeft);

        if (currentTime < 500) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }
  }

  // Easing function for smooth scrolling
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  function handleMouseEnter() {
    setHovering(true);
  }

  function handleMouseLeave() {
    setHovering(false);
  }

  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{title}</h3>
      <div className="row__posters" ref={rowRef}>
        {hovering && (
          <>
            <button onClick={handleLeftClick} className="left">
              &gt;
            </button>
            <button onClick={handleRightClick} className="right">
              &lt;
            </button>
          </>
        )}

        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <>
                <div
                  key={movie.id}
                  className="skeletonRow__poster"
                  style={{ display: loaded ? "none" : "block" }}
                />
                <img
                  key={movie.id}
                  src={`${base_url}${movie?.backdrop_path}`}
                  className="row__poster"
                  onClick={() => {
                    setClickedMovieId(movie.id);
                    fetchVideoId(movie.id);
                  }}
                  alt={movie.name}
                  onLoad={() => setLoaded(true)} // set the state when the image is loaded
                  style={{ display: loaded ? "block" : "none" }} // hide the image until it is loaded
                />
                {clickedMovieId === movie.id && (
                  <div className="youtube__container">
                    {/* X-Icon SVG */}
                    <div className="youtube__escape ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          setClickedMovieId(null);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>

                    <div className="youtube__text">
                      <h1 className="youtube__title">
                        {movie?.title || movie?.name || movie?.original_name}
                      </h1>
                      <p className="youtube__description">
                        {truncate(movie?.overview, 350)}
                      </p>
                    </div>
                    <div className="youtube__trailer">
                      {" "}
                      {videoId ? (
                        <Youtube videoId={videoId} />
                      ) : (
                        <h2 className="youtube__trailerLoader">
                          No video found
                        </h2>
                      )}
                    </div>
                  </div>
                )}
              </>
            )
        )}
      </div>
    </div>
  );
}
