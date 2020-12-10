import http from './http';

const API_URL = '/article';

export const list = async () => {
  try {
    return await http.get(`${API_URL}/`);
  } catch (err) {
    return err.response.data;
  }
};

export const listTopTen = async () => {
  try {
    return await http.get(`${API_URL}/topten`);
  } catch (err) {
    return err.response.data;
  }
};

  export const listByCategory = async (id) => {
  try {
    return await http.get(`${API_URL}/category/${id}`);
  } catch (err) {
    return err.response.data;
  }
};

export const listBySearchWord = async (searchWord) => {
  try {
    return await http.get(`${API_URL}/search/${searchWord}`);
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

export const remove = async (id) => {
  try {
    return await http.delete(`${API_URL}/${id}`);
  } catch (error) {
    return error.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}/new`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const update = async (id, data) => {
  try {
    return await http.put(`${API_URL}/update/${id}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export default {
  create,
  list,
  listTopTen,
  listByCategory,
  listBySearchWord,
  update,
  get,
  remove,
};
