import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.disneyapi.dev/character?pageSize=7438'
});

export default instance;

