import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import { Login } from "./components/pages/Login";
import { Footer } from "./components/partials/footer";
import { Navbar } from "./components/partials/navBar";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
