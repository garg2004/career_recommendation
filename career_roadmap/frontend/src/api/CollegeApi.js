import axios from 'axios';

export const getColleges = async (filters) => {
  const params = new URLSearchParams(filters).toString();
  const res = await axios.get(`http://localhost:5000/api/colleges?${params}`);
  return res.data;
};
