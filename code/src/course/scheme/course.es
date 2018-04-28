import { normalize, schema } from 'normalizr';

function schemeCourse(data) {
    const stages = new schema.Entity('stageList');
    const courseList = new schema.Entity('course', {stages: [stages]});
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