import { createContext, useContext, useState } from "react";

export const SiteContext = createContext(null);

export const useSite = () => {
  const siteState = useContext(SiteContext);
  return siteState;
};

export const SiteProvider = (props) => {
  const [progress, setProgress] = useState(0);
  return (
    <SiteContext.Provider value={{ progress,setProgress }}>
      {props.children}
    </SiteContext.Provider>
  );
};
