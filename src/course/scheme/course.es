import { normalize, schema } from 'normalizr';

function schemeCourse(data) {
    const courseList = new schema.Entity('course');
    return normalize(data, courseList);
}

function schemeCourseList(data) {
    const courseList = new schema.Entity('courseList');
    return normalize(data, [courseList]);
}

export {
    schemeCourseList,
    schemeCourse,
};