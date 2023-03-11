import "./LoginNav.css";
import { useEffect, useState } from "react";
export default function Nav() {
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
            alt="netflix logo"
            className="nav__logo"
          />
          <button className="nav__button">Sign up</button>
        </div>
      </div>
    </>
  );
}
