import NewsActionTypes from './NewsActionTypes';
import Apis from './Apis';

const getNewsByTopic = (topic) => {
    return (dispatch) => {
        dispatch({
            type: NewsActionTypes.GET_EVERYTHING_BY_TOPIC,
            payload: Apis.getEverythingByTopic(topic)
        });
    };
};

const getHeadlinesByCountry = (country) => {
    return (dispatch) => {
        dispatch({
            type: NewsActionTypes.GET_HEADLINES_BY_COUNTRY,
            payload: Apis.getHeadlinesByCountry(country)
        });
    };
};

const NewsActions = {
    getNewsByTopic,
    getHeadlinesByCountry
};

export default NewsActions;

