import axios from 'axios';

const api = axios.create({
   baseURL: 'https://ultimoheroi-backend.herokuapp.com/'
   // baseURL: 'https://ultimoheroi-back.herokuapp.com',
});

export default api;