import "./ProfileScreen.css";
import ProfileNav from "../ProfileNav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profileScreen">
      <ProfileNav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="avatar"
            // className="nav__avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans"></div>
            <button className="profileScreen__signOut" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
