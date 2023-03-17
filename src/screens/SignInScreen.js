import "./SignInScreen.css";
import { useRef } from "react";
import { auth } from "../firebase";

export default function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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

  return (
    <div className="signInScreen">
      <form>
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
        <h5>
          <span className="signIn__gray">New to Netflix? </span>
          <span className="signIn__link" onClick={signUp}>
            Sign up now
          </span>
        </h5>
      </form>
    </div>
  );
}
