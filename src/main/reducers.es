import {combineReducers} from 'redux';
import {ActionTypes} from "../profile/constants/login.es";
import {
    reducers as commonReducers,
    MODULE_NAME as COMMON_MODULE_NAME,
} from 'src/common/index.es';

import {
    reducers as modalReducers,
    MODULE_NAME as MODAL_MODULE_NAME
} from 'src/modal/index.es';

import {
    reducers as profileReducers,
    MODULE_NAME as PROFILE_MODULE_NAME
} from 'src/profile/index.es';

import {
    reducers as courseReducers,
    MODULE_NAME as COURSE_MODULE_NAME
} from 'src/course/index.es';

const appReducer = combineReducers({
    [COMMON_MODULE_NAME]: commonReducers,
    [MODAL_MODULE_NAME]: modalReducers,
    [PROFILE_MODULE_NAME]: profileReducers,
    [COURSE_MODULE_NAME]: courseReducers,
});


const storeReducers = (state, action) => {
    if (action.type === ActionTypes.CLEAR_STORE) {
        Object.keys(state).forEach((key) => {
            state[key] = undefined;
        });
    }
    return appReducer(state, action);
};

export {
    storeReducers,
};