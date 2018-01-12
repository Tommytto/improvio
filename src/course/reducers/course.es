import {ActionTypes} from '../constants/course.es';

const initialState = {
    data:{},
    list:[],
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
                list: [
                    ...state.list,
                    payload.id,
                ]
            };
        default:
            return state;
    }
};

export {
    course,
};