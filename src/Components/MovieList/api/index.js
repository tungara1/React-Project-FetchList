import api from "ApiServices";

const getMovieDetails = (url = "films") => api.get(url);

const obj = {
  getMovieDetails,
};

export default obj;
