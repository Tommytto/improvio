import {storeReducers} from './reducers.es';

import {
    configureStore,
    CourseList as CourseListApi,
} from 'src/common/index.es';

import {
    Api as ProfileApi,
} from 'src/profile/api'
const isProduction = process.env.NODE_ENV === 'production';
const store = configureStore(!isProduction, storeReducers, {
    'CourseList': new CourseListApi(),
    'ProfileApi': new ProfileApi(),
});

export {
    store,
};