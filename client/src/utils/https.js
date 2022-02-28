import axios from 'axios';

const axiosInterface = axios.create({
    baseURL:'http://localhost:8080/',
});

axiosInterface.interceptors.request.use(async req => {
    return req;
}, error => {
    return Promise.reject(error);
});

axiosInterface.interceptors.response.use(async resp =>{
    return resp;
}, error =>{
    return Promise.reject(error);
});

export default axiosInterface;