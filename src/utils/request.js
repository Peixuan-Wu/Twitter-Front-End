
import axios from "axios";


const domain = 'http://localhost:3333';

axios.interceptors.request.use((config) => ({
    ...config,
    url: domain + config.url
}))

// intercept the error in response: data transform and error handling
axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err));

// get the server information
export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.defaults(url, params);

export const patch = (url, params) => axios.patch(url, params);