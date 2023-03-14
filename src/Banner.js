import { useEffect, useState } from "react";
import "./Banner.css";
import { videos } from "./videos";
import { shuffle } from "lodash";

export default function Banner() {
  // I want you to shuffle the src with the values in videos[]
  const [
    allOfUsAreDead,
    birdBox,
    dontLookUp,
    elCamino,
    squidGame,
    strangerThings,
    theMitchells,
    theGrayMan,
    wednesday,
    you,
  ] = videos;
  let index = Math.floor(Math.random() * videos.length);
  useEffect(() => {
    var video = document.getElementById("videoBG");
    video.oncanplaythrough = function () {
      video.muted = true;
      video.play();
    };
  }, []);

  return (
    <>
      <header className="banner">
        <video
          id="videoBG"
          className="skeleton"
          src={videos[index]}
          type="video/mp4"
          autoplay
          muted
          controls
          loop
        />
      </header>
    </>
  );
}
