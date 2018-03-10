import BaseApi from "api/base-api.es";

class CourseApi extends BaseApi {
    getCourseList() {
        return this.request('/api/course', 'GET')
    }

    getCourse(courseId) {
        return this.request(`/api/course/${courseId}`, 'GET')
    }

    createCourse(data) {
        return this.request('/api/course', 'POST', data);
    }

    updateCourse(data, courseId) {
        return this.request(`/api/course/${courseId}`, 'PATCH', data);
    }

    updatePoster(data, courseId) {
        return this.request(`/api/course/${courseId}/poster`, 'POST', data, true);
    }

}

export {
    CourseApi,
};