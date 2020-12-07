import http from './http';

const API_URL = '/email';


export const send = async (data) => {
    try {
        return await http.post(`${API_URL}/send`, data);
        
    } catch (err) {
        return err.response.data;
    }
};

export const create = async (data) => {
    try {
        return await http.post(`${API_URL}/create`, data);
        
    } catch (error) {
        return error.response.data;
    }
};

export default { send, create };