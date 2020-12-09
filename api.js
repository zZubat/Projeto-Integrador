import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://my-json-server.typicode.com/michelzenatti/prestacaodeservico'
});

export default api;