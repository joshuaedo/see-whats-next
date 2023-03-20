import "./Nav.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { photoURLState } from "./atoms/photoAtom.js";


// Boo! Did I scare you?
export default function ProfileNav() {
  const navigate = useNavigate();
  const [userImg, setUserImg] = useRecoilState(photoURLState);
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          <div className="profile__escape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
              onClick={() => navigate("/")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <img
            onClick={() => navigate("/profile")}
            src={
              userImg
                ? userImg
                : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            }
            alt="avatar"
            className="nav__avatar"
          />
        </div>
      </div>
    </>
  );
}
