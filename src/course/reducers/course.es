import {ActionTypes} from '../constants/course.es';

const initialState = {
    data:{},
    list: [],
    isLoading: false,
};

const course = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_COURSE_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.GET_COURSE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.course,
                },
                isLoading: false,
            };
        case ActionTypes.GET_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.UPDATE_COURSE_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.course,
                },
                isLoading: false,
            };
        case ActionTypes.UPDATE_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.CREATE_COURSE_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.CREATE_COURSE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.course,
                },
                list: [
                    ...state.list,
                    payload.result,
                ],
                isLoading: false,
            };
        case ActionTypes.CREATE_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.GET_COURSE_LIST_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.GET_COURSE_LIST_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.courseList,
                },
                list: payload.result,
                isLoading: false,

            };
        case ActionTypes.GET_COURSE_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.UPDATE_COURSE_POSTER_START:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.UPDATE_COURSE_POSTER_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.result]: {
                        ...state.data[payload.result],
                        poster: payload.entities.course[payload.result].poster,
                    },
                },
                isLoading: false,
            };
        case ActionTypes.UPDATE_COURSE_POSTER_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export {
    course,
};