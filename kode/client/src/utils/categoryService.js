import http from './http';

const API_URL = '/category';

export const get = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response.data;
  }
};


export default {
  create,
  get,
};
