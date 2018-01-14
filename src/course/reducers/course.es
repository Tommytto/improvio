import {ActionTypes} from '../constants/course.es';

const initialState = {
    data:{},
};

const course = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_COURSE_INFO:
            return {
                ...state,
                data: {
                    ...state.data,
                    [payload.id]: {
                        ...state.data[payload.id],
                        ...payload,
                    }
                },
            };
        case ActionTypes.SET_COURSE_LIST:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload.entities.courses,
                },
            };
        default:
            return state;
    }
};

export {
    course,
};