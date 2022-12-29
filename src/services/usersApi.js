import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const data = await axios.get('/users');

  return data;
};

export const fetchPosts = async id => {
  const data = await axios.get(`/posts?userId=${id}`);

  return data;
};
