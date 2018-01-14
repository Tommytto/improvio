import { normalize, schema } from 'normalizr';

function schemeProfile(data) {
    const courses = new schema.Entity('courses', {});
    const profile = new schema.Entity('profile', {courses: [courses]});
    return normalize(data, profile);
}

export {
    schemeProfile,
};