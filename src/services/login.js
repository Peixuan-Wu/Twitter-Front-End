import { get, post } from '../utils/request';


export const loginServices = (username, password) => get(`/api/login/${username}/${password}`);


export const register = (username, password) => post(`/register/${username}/${password}`);