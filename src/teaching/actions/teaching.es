import {ActionTypes} from '../constants/teaching.es'
import {ActionTypes as CourseActionTypes} from 'src/course/constants/course.es'

const createCourse = (data, author) => async (dispatch, getState, {TeachingApi}) => {
    dispatch({type: ActionTypes.COURSE_CREATE_START});
    try {
        const response = await TeachingApi.createCourse({...data, author});
        dispatch({type: ActionTypes.COURSE_CREATE_SUCCESS});
        dispatch({type: CourseActionTypes.SET_COURSE_INFO, payload: response});
    } catch (error) {
        dispatch({type: ActionTypes.COURSE_CREATE_FAIL});
        console.error(error);
    }
};

export {
    createCourse,
};