import http from './http';


export const send = async (data) => {
    try {
        return await http.post(`/send`, data);
        
    } catch (err) {
        return err.response.data;
    }
};

export default { send };