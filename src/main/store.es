import {storeReducers} from './reducers.es';

import {
    configureStore,
} from 'src/common/index.es';

import {
    Api as ProfileApi,
} from 'src/profile/api'

import {
    Api as TeachingApi,
} from 'src/teaching/api/index.es';

import {
    Api as CourseApi
} from 'src/course/index.es'

const isProduction = process.env.NODE_ENV === 'production';
const store = configureStore(!isProduction, storeReducers, {
    'ProfileApi': new ProfileApi(),
    'TeachingApi': new TeachingApi(),
    'CourseApi': new CourseApi(),
});

export {
    store,
};