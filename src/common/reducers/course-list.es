import ActionTypes from '../constants/course-list.es';

const initialState = {
    isLoading: false,
    data: {},
    list: [],

};

export default function courseList(state = initialState, {type, payload}) {
    switch (type) {
        case ActionTypes.COURSE_LIST_LOAD:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.COURSE_LIST_LOAD_SUCCESS:
            return {
                ...state,
                ...payload,
                isLoading: false,
            };
        case ActionTypes.COURSE_LIST_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}