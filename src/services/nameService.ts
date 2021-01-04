import axios from 'axios';
const baseUrl = '/api/names';

export const getAllNames = async (): Promise<
  Array<{ name: string; amount: number }>
> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getOneName = async (
  id: string
): Promise<{ name: string; amount: number }> => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
