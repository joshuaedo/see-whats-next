import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Rows from "../Rows";
export default function HomeScreen() {
  return (
    <>
      <div className="homeScreen">
        <Nav />
        <Banner />
        <Rows />
      </div>
    </>
  );
}
