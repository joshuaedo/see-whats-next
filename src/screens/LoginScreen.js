import "./LoginScreen.css";
import LoginNav from "../LoginNav";

export default function LoginScreen() {
  return (
    <>
      <div className="loginScreen">
        <LoginNav />
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          <>
            <h1>Unlimited films, Tv Programmes and more</h1>
            <h2>Watch any where, cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button>Get Started</button>
              </form>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
