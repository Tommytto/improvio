import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {MainPageContainer} from './containers/MainPageContainer';

const Router = () => {
    return <Switch>
            <Route exact path="/teaching" component={MainPageContainer} />
        </Switch>
};

export {
    Router,
};