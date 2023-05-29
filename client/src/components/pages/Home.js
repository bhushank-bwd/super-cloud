import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProgress } from "../../redux_toolkit/slices/siteSettingSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setProgress(100));
    // eslint-disable-next-line
  }, [navigate]);
  return <div>Home</div>;
};

export default Home;
