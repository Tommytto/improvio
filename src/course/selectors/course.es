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

export {
    selectorCourseData,
    selectorCourse,
};