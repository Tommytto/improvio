import BaseApi from "../../common/api/BaseApi.es";

class Api extends BaseApi {
    getCourseList() {
        return this.request('/api/courses', 'GET')
    }

    getCourse(courseId) {
        return this.request(`/api/courses/${courseId}`, 'GET')
    }

    createCourse(data) {
        return this.request('/api/courses', 'POST', data);
    }

    updateCourse(data, courseId) {
        return this.request(`/api/courses/${courseId}`, 'PATCH', data);
    }

}

export {
    Api,
};