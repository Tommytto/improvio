import {schemeCourse, schemeCourseList} from "src/course/scheme/course.es";
import {ActionTypes} from "src/course/constants/course.es";
import {ActionTypes as ProfileActionTypes} from "src/profile/constants/profile.es";
import {ActionTypes as StageActionTypes} from "src/course/constants/stage.es";

const getCourse = (courseId) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.GET_COURSE_START});
    try {
        const {data} = await CourseApi.getCourse(courseId);
        const normData = schemeCourse(data);

        dispatch({type: ActionTypes.GET_COURSE_SUCCESS, payload: normData});
        dispatch({type: StageActionTypes.SET_STAGE_LIST, payload: normData.entities.stageList});

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
        console.error(error);
    }

};

const createCourse = (courseData) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.CREATE_COURSE_START});
    try {
        const {data} = await CourseApi.createCourse(courseData);
        const normData = schemeCourse(data);
        dispatch({type: ActionTypes.CREATE_COURSE_SUCCESS, payload: normData});
        dispatch({type: ProfileActionTypes.ADD_PROFILE_COURSE, payload: normData.result});
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

const updatePoster = (poster, courseId) => async (dispatch, getState, {CourseApi}) => {
    dispatch({type: ActionTypes.UPDATE_COURSE_POSTER_START});
    try {
        const {data} = await CourseApi.updatePoster(poster, courseId);
        const normData = schemeCourse(data);
        dispatch({type: ActionTypes.UPDATE_COURSE_POSTER_SUCCESS, payload: normData});
    } catch (error) {
        dispatch({type: ActionTypes.UPDATE_COURSE_POSTER_FAIL});
        console.error(error);
    }
};

export {
    getCourse,
    getCourseList,
    createCourse,
    updateCourse,
    updatePoster,
};