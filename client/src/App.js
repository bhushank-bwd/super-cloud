import Home from "./components/pages/Home";
import LoadingBar from "react-top-loading-bar";
import Register from "./components/pages/Register";
import { Login } from "./components/pages/Login";
import { Footer } from "./components/partials/footer";
import { Navbar } from "./components/partials/navBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSite } from "./context/Site";

function App() {
  const siteState = useSite(); 
  return (
    <>
      <Router>
        <div className="container-fluid">
          <LoadingBar
            color="#f11946"
            height={3}
            progress={siteState.progress}
            onLoaderFinished={() => siteState.setProgress(0)}
          />
          <ToastContainer />
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
