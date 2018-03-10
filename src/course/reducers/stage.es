import {ActionTypes} from '../constants/stage.es';

const initialState = {
    data: {},
    isLoading: false,
};

const stage = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CREATE_STAGE_START:
            return {
                ...state,
                isLoading: true,
            };

        case ActionTypes.CREATE_STAGE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.stage,
                },
                isLoading: false,
            };
        case ActionTypes.CREATE_STAGE_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.SET_STAGE_LIST:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload,
                },
            };
        default:
            return state;
    }
};

export {
    stage,
};