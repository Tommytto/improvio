import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {CourseEditorContainer} from './containers/CourseEditorContainer';
import {TeacherContainer} from "./containers/TeacherContainer";
import {CourseCreatorContainer} from "./containers/CourseCreatorContainer";

const Router = () => {
    return <Switch>
            <Route exact path="/teaching" component={TeacherContainer} />
            <Route exact path="/teaching/course-creating" component={CourseCreatorContainer} />
            <Route exact path="/teaching/courses/:courseId" component={CourseEditorContainer} />
        </Switch>
};

export {
    Router,
};