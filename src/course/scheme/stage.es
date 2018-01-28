import { normalize, schema } from 'normalizr';

function schemeStage(data) {
    const stage = new schema.Entity('stage');
    return normalize(data, stage);
}

export {
    schemeStage,
};