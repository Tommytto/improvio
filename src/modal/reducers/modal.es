import {ActionTypes} from '../constants/modal';

const initialState = {};

const modal = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.OPEN_MODAL:
            console.log('reducer');
            return {
                ...state,
                [payload]: true,
            };
        case ActionTypes.CLOSE_MODAL:
            return {
                ...state,
                [payload]: false,
            };
        default:
            return state;
    }
};

export {
    modal,
};