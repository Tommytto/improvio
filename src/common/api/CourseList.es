import BaseApi from './BaseApi';

class CourseList extends BaseApi {
    loadCourseList(offset, limit) {
        return this.request('/api/course-list.json', 'GET', {offset, limit})
        // return new Promise((resolve) => resolve(json[0]))
    }
}

export {
    CourseList,
};