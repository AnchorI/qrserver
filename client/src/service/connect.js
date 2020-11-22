import axios from 'axios';

 const API_URL = 'http://localhost:1234/products/'

 const getById = (id) => {
    return axios.get(API_URL+ id);
};
export default getById;