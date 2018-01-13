import {ActionTypes} from '../constants/teaching.es'
import {ActionTypes as CourseActionTypes} from 'src/course/constants/course.es'

const createCourse = (courseData) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.COURSE_CREATE_START});
    try {
        const {data} = await CourseApi.createCourse(courseData);
        dispatch({type: ActionTypes.COURSE_CREATE_SUCCESS});
        dispatch({type: CourseActionTypes.SET_COURSE_INFO, payload: data});
        return data.id
    } catch (error) {
        dispatch({type: ActionTypes.COURSE_CREATE_FAIL});
        console.error(error);
    }
};

const updateCourse = (courseData, courseId) => async (dispatch, getState, {CourseApi}) => {
    // dispatch({type: ActionTypes.COURSE_CREATE_START});
    try {
        const {data} = await CourseApi.updateCourse(courseData, courseId);
        // dispatch({type: ActionTypes.COURSE_CREATE_SUCCESS});
        // dispatch({type: CourseActionTypes.SET_COURSE_INFO, payload: data});
        // return data.id
    } catch (error) {
        // dispatch({type: ActionTypes.COURSE_CREATE_FAIL});
        console.error(error);
    }
};

export {
    createCourse,
    updateCourse,
};