import "./Rows.css";
import Row from "./Row";
import axios from "./axios";
import requests from "./Requests";
import Youtube from "react-youtube";
import { useEffect, useState } from "react";

export default function Rows() {
  return (
    <>
      <div className="rows">
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="TV" fetchUrl={requests.fetchTVMovies} />
        <Row title="Animation " fetchUrl={requests.fetchAnimationMovies} />
        <Row title="Crime" fetchUrl={requests.fetchCrimeMovies} />
        <Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
        <Row title="Fantasy" fetchUrl={requests.fetchFantasyMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Family" fetchUrl={requests.fetchFamilyMovies} />
        <Row title="History" fetchUrl={requests.fetchHistoryMovies} />
        <Row title="Music" fetchUrl={requests.fetchMusicMovies} />
        <Row title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
        <Row
          title="Science Fiction"
          fetchUrl={requests.fetchScienceFictionMovies}
        />
        <Row title="Thriller" fetchUrl={requests.fetchThrillerMovies} />
        <Row title="War" fetchUrl={requests.fetchWarMovies} />
        <Row title="Western" fetchUrl={requests.fetchWesternMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}
