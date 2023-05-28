import Cookies from "js-cookie";

const getToken = (key) => {
  const token = Cookies.get(key);

  // Check if a token exists
  if (token) {
    return token;
  } else {
    return false;
  }
};

export default getToken;
