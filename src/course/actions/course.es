import {ActionTypes} from '../constants/course.es'

const getCourse = (courseId) => async (dispatch, getState, {CourseApi}) => {
    const response = await CourseApi.getCourse(courseId);
    dispatch({type: ActionTypes.SET_COURSE_INFO, payload: response.data});
};

export {
    getCourse,
};