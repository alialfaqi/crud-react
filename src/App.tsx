import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:userID" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
