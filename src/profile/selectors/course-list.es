function selectorCourseListData(state) {
    return state.courseList.data;
}

function selectorCourseIdList(state) {
    return state.courseList.list;
}

function selectorCourseList(state) {
    return state.courseList;
}

function selectorCourse(state, id) {
    return state.courseList.data[id];
}

export {
    selectorCourseIdList,
    selectorCourseList,
    selectorCourseListData,
    selectorCourse,
};