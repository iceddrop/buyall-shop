import axios from 'axios';

export const getProductsInstance = axios.create({
    baseURL: 'https://dummyjson.com/products',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
