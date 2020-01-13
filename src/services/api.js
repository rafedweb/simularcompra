import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://localhost:44393/api/v1'
    baseURL: 'https://simularcompraapi.azurewebsites.net/api/v1'
})

export default api;