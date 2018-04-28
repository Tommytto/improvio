import {stage} from "course/reducers/stage.es";
import {course} from './course.es';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    course,
    stage,
});

export {
    reducers,
};