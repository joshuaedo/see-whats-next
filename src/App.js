import "./App.css";
import HomeScreen from "./HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
