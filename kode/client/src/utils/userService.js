import http from './http';

//HA RIKTIG URL HER
const API_URL = '/users';


//KAN TENKES VI IKKE TRENGER ALLE API-DELENE ENDA. KANSKJE BARE CREATE?
export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`/register`, data);
  } catch (err) {
    return err.response.data;
  }
};


export default {
  create,
  list,
  get,
};