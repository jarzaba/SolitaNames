import axios from 'axios';
const baseUrl = '/api/names';

export const getAllNames = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
