import { normalize, schema } from 'normalizr';

function schemeUser(data) {
    const user = new schema.Entity('user');
    return normalize(data, user);
}


export {
    schemeUser,
};