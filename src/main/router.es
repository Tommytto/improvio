import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import {MainPageContainer} from 'src/guest/index.es';
import {Router as TeachingRouter} from 'src/teaching/index.es';
import {PrivateRoute} from "../profile/containers/PrivateRouteContainer";

const Router = () => {
    return <HashRouter>
        <Switch>
            <PrivateRoute path="/teaching" component={TeachingRouter} guestComponent={MainPageContainer}/>
            <Route exact path="/" component={MainPageContainer} />
            <Route component={() => "error page"} />
        </Switch>
    </HashRouter>;
};

export {
    Router,
};