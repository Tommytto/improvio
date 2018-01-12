import ActionTypes from '../constants/course-list';
import {normalizeCourseList} from '../schemes/course-list';
import {selectorCourse} from '../selectors/course-list';

function getCourseList(offset = 0, limit = 20) {
    return (dispatch, getState, {CourseList}) => {
        dispatch({type: ActionTypes.COURSE_LIST_LOAD});
        CourseList.loadCourseList(offset, limit)
            .then(({data}) => {
                dispatch({type: ActionTypes.COURSE_LIST_LOAD_SUCCESS, payload: normalizeCourseList(data)});
            })
            .catch((error) => {
                dispatch({type: ActionTypes.COURSE_LIST_LOAD_ERROR});
                console.log(error);
            })
    }
}

function getCourse(id) {
    return (dispatch, getState) => {
        selectorCourse(getState(), id);
    }
}

export {
    getCourseList,
    getCourse,
};