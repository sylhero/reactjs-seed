import axios from 'axios';
import CommonConstant from '../Common/CommonConstant';

const baseUrl = CommonConstant.BASE_URL;
const apiKey = CommonConstant.API_KEY;

const getEverythingByTopic = (topic) => {
    return axios.get(`${baseUrl}/v2/everything`, {
        params: {
            topic,
            apiKey
        }
    });
};

const getHeadlinesByCountry = (country) => {
    return axios.get(`${baseUrl}/v2/top-headlines`, {
        params: {
            country,
            apiKey
        }
    });
};
const Apis = {
    getEverythingByTopic,
    getHeadlinesByCountry
};

export default Apis;
