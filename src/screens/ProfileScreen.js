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
        <h1>Profile Details</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="avatar"
            className="profileScreen__avatar"
          />
          <div className="profileScreen__details">
            {console.log(user)}
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="plans">
                <div className="plans__info">
                  <h5>Premium</h5>
                  <h6>4K + HDR</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="plans">
                <div className="plans__info">
                  <h5>Basic</h5>
                  <h6>720p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="plans">
                <div className="plans__info">
                  <h5>Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="plans freePlan">
                <div className="plans__info">
                  <h5>Free</h5>
                  <h6>480p</h6>
                </div>
                <button>Subscribed</button>
              </div>
            </div>
            <button className="profileScreen__signOut" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
