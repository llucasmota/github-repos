import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

//https://api.github.com/users/USERNAME/repos

export default api;
