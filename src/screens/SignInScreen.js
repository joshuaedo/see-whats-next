import "./SignInScreen.css";

export default function SignInScreen() {
  return (
    <div className="signInScreen">
      <form>
        <h2>Sign In</h2>
        <input placeholder="Email" type="email"></input>
        <input placeholder="password" type="password"></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
