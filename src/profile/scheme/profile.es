import { normalize, schema } from 'normalizr';

function schemeProfile(data) {
    const profile = new schema.Entity('profile');
    return normalize(data, profile);
}

export {
    schemeProfile,
};