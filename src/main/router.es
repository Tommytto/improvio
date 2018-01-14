import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {MainPageContainer} from 'src/guest/index.es';
import {Router as TeachingRouter} from 'src/teaching/index.es';
import {UserMainContainer} from "src/user/containers/UserMainContainer";
import {PrivateRoute} from "src/profile/containers/PrivateRouteContainer";

const Router = () => {
    return <HashRouter>
        <Switch>
            <PrivateRoute path="/teaching" component={TeachingRouter} guestComponent={MainPageContainer}/>
            <PrivateRoute exact path="/" component={UserMainContainer} guestComponent={MainPageContainer}/>
            <Route component={() => "error page"} />
        </Switch>
    </HashRouter>;
};

export {
    Router,
};