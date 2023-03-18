import "./SignInScreen.css";
import { useState, useRef } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRecoilState } from "recoil";
import { photoURLState } from "../atoms/photoAtom.js";

export default function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const provider = new GoogleAuthProvider();
  const [userImg, setUserImg] = useRecoilState(photoURLState);
  const [signedUp, setSignedUp] = useState(true);
  const handleSignUp = () => {
    if (signedUp) {
      setSignedUp(false);
    } else {
      setSignedUp(true);
    }
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUserImg(result.user.photoURL);
      })
      .catch((error) => {
        alert(error.message);
      });

    console.log(userImg);
  };

  return (
    <div className="signInScreen">
      <form>
        {signedUp ? (
          <>
            <h2>Sign In</h2>
            <input
              placeholder="Email"
              type="email"
              className="signIn__Input"
              ref={emailRef}
            ></input>
            <input
              placeholder="Password"
              type="password"
              className="signIn__Input"
              ref={passwordRef}
            ></input>
            <button type="submit" className="signIn__Button" onClick={signIn}>
              Sign In
            </button>
            <button
              type="submit"
              className="google signIn__Button"
              onClick={signInWithGoogle}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" />{" "}
              <span>Continue with Google</span>
            </button>
            <h5>
              <span className="signIn__gray">New to Netflix? </span>
              <span className="signIn__link" onClick={handleSignUp}>
                Sign up now
              </span>
            </h5>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <input
              placeholder="Email"
              type="email"
              className="signIn__Input"
              ref={emailRef}
            ></input>
            <input
              placeholder="Password"
              type="password"
              className="signIn__Input"
              ref={passwordRef}
            ></input>
            <button type="submit" className="signIn__Button" onClick={signUp}>
              Sign Up
            </button>
            <button
              type="submit"
              className="google signIn__Button"
              onClick={signInWithGoogle}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" />{" "}
              <span>Continue with Google</span>
            </button>
            <h5>
              <span className="signIn__gray">Already have an account? </span>
              <span className="signIn__link" onClick={handleSignUp}>
                Sign in
              </span>
            </h5>
          </>
        )}
      </form>
    </div>
  );
}
