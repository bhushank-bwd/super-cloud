import React, { useEffect } from "react";
import { useSite } from "../../context/Site";

const Home = () => {
  const siteState = useSite();
  useEffect(() => {
    siteState.setProgress(100);
     // eslint-disable-next-line 
  }, []);
  return <div>Home</div>;
};

export default Home;
