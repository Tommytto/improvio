import {MODULE_NAME} from '../constants/config.es';

function selectorCourseState(state) {
    return state[MODULE_NAME].course;
}

function selectorCourseData(state) {
    return selectorCourseState(state).data;
}

function selectorCourseList(state) {
    return selectorCourseState(state).list;
}

function selectorCourse(state, courseId) {
    return selectorCourseData(state)[courseId];
}

function selectorStageListByCourse(state, courseId) {
    const course = selectorCourse(state, courseId);
    if (!course) {
        return null;
    }
    return selectorCourse(state, courseId).stages;
}

function selectorCourseDataByList(state, courseList) {
    if (!courseList || !courseList.length) {
        return null;
    }
    return courseList.reduce((result, courseId) => {
        const course = selectorCourse(state, courseId);
        if (course) {
            result[courseId] = course;
        }
        return result;
    }, {});
}

export {
    selectorCourseData,
    selectorCourseList,
    selectorCourse,
    selectorCourseDataByList,
    selectorStageListByCourse,
};