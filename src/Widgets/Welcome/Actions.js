import ActionTypes from './ActionTypes';
import Apis from './Apis';

const getData = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.GET_TEST_DATA,
            payload: Apis.getTestData
        });
    };
};

const updateData = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.UPDATE_TEST_DATA,
            payload: {
                data: {
                    title: 'woru'
                }
            }
        });
    };
};

const Actions = {
    getData,
    updateData
};

export default Actions;
