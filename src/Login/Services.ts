import baseUrl from '../common/baseUrl';
import axios from 'axios';
const login = async (username, password, type) => {
    return axios.post(`${baseUrl}/auth/login`, {
        username,
        password,
        type
    });
};

const signup = async (username, password, activationCode, id) => {
    return axios.post(`${baseUrl}/auth/signup`, {
        username,
        password,
        activationCode,
        id
    });
};

const services = {
    login,
    signup
};

export default services;
