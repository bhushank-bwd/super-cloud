import Cookies from 'js-cookie';

const getToken = () => {
  const token = Cookies.get('token');

  // Check if a token exists
  if (token) {
    return token;
  } else {
    return false;
  }
};

export default getToken;