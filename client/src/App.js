import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import LoadingBar from "react-top-loading-bar";
import { Login } from "./components/pages/Login";
import { Footer } from "./components/partials/footer";
import { Navbar } from "./components/partials/navBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "./redux_toolkit/slices/siteSettingSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { siteSettings } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Router>
        <div className="container-fluid">
          <LoadingBar
            color="#f11946"
            height={3}
            progress={siteSettings.progress}
            onLoaderFinished={() => dispatch(setProgress(0))}
          />
          <ToastContainer autoClose={3000} />
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
