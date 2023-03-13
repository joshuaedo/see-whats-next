import { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const API_KEY = "f025efcd2e89d572e5a3ac07a0ce13d3";
  const [clickedMovieId, setClickedMovieId] = useState(null);
  const [videoId, setVideoId] = useState(null);

  async function fetchVideoId(movieId) {
    const response = await axios.get(
      `/movie/${movieId}/videos?api_key=${API_KEY}&append_to_response=videos`
    );
    const video = response.data.results.find(
      (result) => result.name === "Official Trailer"
    );
    const videoId = video ? video.key : null;
    setVideoId(videoId);
  }

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <>
                <img
                  key={movie.id}
                  src={`${base_url}${movie?.backdrop_path}`}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  onClick={() => {
                    setClickedMovieId(movie.id);
                    fetchVideoId(movie.id);
                  }}
                  alt={movie.name}
                />
                {clickedMovieId === movie.id && videoId && (
                  <div className="youtube__container">
                    <Youtube videoId={videoId} />
                  </div>
                )}
              </>
            )
        )}
      </div>
    </div>
  );
}
