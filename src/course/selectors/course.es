import {MODULE_NAME} from '../constants/config.es';

function selectorCourseState(state) {
    return state[MODULE_NAME].course;
}

function selectorCourseData(state) {
    return selectorCourseState(state).data;
}

function selectorCourse(state, courseId) {
    return selectorCourseData(state)[courseId];
}

function selectorCourseDataByList(state, courseList) {
    if (!courseList || !courseList.length) {
        return null;
    }
    return courseList.map((courseId) => selectorCourse(state, courseId));
}

export {
    selectorCourseData,
    selectorCourse,
    selectorCourseDataByList,
};