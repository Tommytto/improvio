import {AuthApi, CourseApi, StageApi, UserApi} from "src/api/index.es";
import {configureStore,} from 'src/common/index.es';
import {storeReducers} from './reducers.es';


const isProduction = process.env.NODE_ENV === 'production';
const store = configureStore(!isProduction, storeReducers, {
    'AuthApi': new AuthApi(),
    'CourseApi': new CourseApi(),
    'StageApi': new StageApi(),
    'UserApi': new UserApi(),
});

export {
    store,
};