import http from './http';

const API_UPLOAD_URL = 'image/upload';
const API_DOWNLOAD_URL = 'image/download';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_UPLOAD_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_URL}/${id}`);
  } catch (error) {
    return error.response;
  }
};
