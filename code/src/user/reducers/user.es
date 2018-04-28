import {ActionTypes} from "src/user/constants/user.es";

const initialState = {
    isLoading: false,
    data: {},
    list: [],
};

const user = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_USER_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.user,
                },
                list: [
                    ...state.list,
                    payload.result,
                ],
                isLoading: false,
            };
        case ActionTypes.GET_USER_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export {
    user,
}