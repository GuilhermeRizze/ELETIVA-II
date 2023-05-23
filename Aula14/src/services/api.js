import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.disneyapi.dev'
});

export default instance;