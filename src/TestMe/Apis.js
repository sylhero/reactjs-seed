// @flow

import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';


const getTestData = (): Promise<Object> => {
    return axios.get(baseUrl);
};

const Apis = {
    getTestData
};

export default Apis;
