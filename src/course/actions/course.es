import {schemeCourse, schemeCourseList} from "src/course/scheme/course.es";
import {ActionTypes} from "src/course/constants/course.es";

const getCourse = (courseId) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.GET_COURSE_START});
    try {
        const {data} = await CourseApi.getCourse(courseId);
        const normData = schemeCourse(data);
        dispatch({type: ActionTypes.GET_COURSE_LIST_SUCCESS, payload: normData});

    } catch (error) {
        dispatch({type: ActionTypes.GET_COURSE_FAIL});
        console.error(error);

    }
};

const getCourseList = () => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.GET_COURSE_LIST_START});
    try {
        const {data} = await CourseApi.getCourseList();
        const normData = schemeCourseList(data);
        dispatch({type: ActionTypes.GET_COURSE_LIST_SUCCESS, payload: normData});
    } catch (error) {
        dispatch({type: ActionTypes.GET_COURSE_LIST_FAIL});
        console.log(error);
    }

};

const createCourse = (courseData) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.CREATE_COURSE_START});
    try {
        const {data} = await CourseApi.createCourse(courseData);
        const normData = schemeCourse(data);
        dispatch({type: ActionTypes.CREATE_COURSE_SUCCESS, payload: normData});
        return data.id
    } catch (error) {
        dispatch({type: ActionTypes.CREATE_COURSE_FAIL});
        console.error(error);
    }
};

const updateCourse = (courseData, courseId) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.UPDATE_COURSE_START});
    try {
        const {data} = await CourseApi.updateCourse(courseData, courseId);
        const normData = schemeCourse(data);
        dispatch({type: ActionTypes.UPDATE_COURSE_SUCCESS, payload: normData});
    } catch (error) {
        dispatch({type: ActionTypes.UPDATE_COURSE_FAIL});
        console.error(error);
    }
};

export {
    getCourse,
    getCourseList,
    createCourse,
    updateCourse,
};