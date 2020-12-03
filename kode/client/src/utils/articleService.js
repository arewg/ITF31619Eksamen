import http from './http';

//SJEKKE OM DETTE BLIR RIKTIG URL
const API_URL = '/fagartikler';

//trenger vi alle her? 

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}/nyartikkel`, data);
  } catch (err) {
    return err.response.data;
  }
};


export default {
  create,
  get,
};
