import {ActionTypes as LoginActionTypes} from '../constants/login.es';
import {ActionTypes as ProfileActionTypes} from '../constants/profile.es';

const initialState = {
    isLoading: false,
    isLogin: false,
    firstName: null,
    lastName: null,
    email: null,
    courses: [],
    id: null,
};

function profile(state = initialState, {type, payload}) {
    switch (type) {
        case LoginActionTypes.LOGIN:
            return {
                ...state,
                isLoading: true,
            };
        case LoginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                isLoading: false,
            };
        case LoginActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case ProfileActionTypes.SET_PROFILE:
            return {
                ...state,
                isLoading: true,
            };
        case ProfileActionTypes.SET_PROFILE_SUCCESS:
            return {
                ...state,
                ...payload.entities.profile[payload.result],
                isLoading: false,
            };
        case ProfileActionTypes.SET_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case ProfileActionTypes.ADD_PROFILE_COURSE:
            return {
                ...state,
                courses: [
                    ...state.courses,
                    payload,
                ]
            };
        default:
            return state;
    }
}

export {
    profile,
};