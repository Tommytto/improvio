import courseList from './course-list';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    courseList,
});

export {
    reducers,
};