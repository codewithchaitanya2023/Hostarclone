// import Login from "./Component/Login";
import { Routes, Route } from "react-router-dom";
import Main from "./Component/Main";
import Login from "./Component/Login";
import Moviedetails from "./Component/Moviedetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Moviedetails />} />
      </Routes>
    </div>
  );
}

export default App;
