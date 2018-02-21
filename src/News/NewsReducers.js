import NewsActionTypes from './NewsActionTypes';


const initialState = {
    isFulfilled: false,
    isPending: false,
    isRejected: false,
    data: {}
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case NewsActionTypes.GET_EVERYTHING_BY_TOPIC_PENDING:
            return {
                ...state,
                isPending: true
            };
        case NewsActionTypes.GET_EVERYTHING_BY_TOPIC_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                data: action.payload
            };
        case NewsActionTypes.GET_EVERYTHING_BY_TOPIC_REJECTED:
            return {
                ...state,
                isRejected: true
            };
        case NewsActionTypes.GET_HEADLINES_BY_COUNTRY_PENDING:
            return {
                ...state,
                isPending: true
            };
        case NewsActionTypes.GET_HEADLINES_BY_COUNTRY_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                data: action.payload
            };
        case NewsActionTypes.GET_HEADLINES_BY_COUNTRY_REJECTED:
            return {
                ...state,
                isRejected: true
            };
        default:
            return state;
    }
};

const NewsReducers = {
    news
};

export default NewsReducers;
