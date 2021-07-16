import api from "ApiServices";

const getAllPeople = () => api.get(`people`);

const obj = {
  getAllPeople,
};

export default obj;
