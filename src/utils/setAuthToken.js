import axios from '../api/axios';

const setAuthToekn = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToekn;
