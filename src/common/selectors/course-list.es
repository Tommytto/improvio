import {MODULE_NAME} from '../constants/config.es';

function selectorCourseListData(state) {
    return selectorCourseList(state).data;
}

function selectorCourseIdList(state) {
    return selectorCourseList(state).list;
}

function selectorCourseList(state) {
    return state[MODULE_NAME].courseList;
}

function selectorCourse(state, id) {
    return selectorCourseList(state).data[id];
}

export {
    selectorCourseIdList,
    selectorCourseList,
    selectorCourseListData,
    selectorCourse,
};