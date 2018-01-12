import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from "../profile/containers/PrivateRouteContainer";
import HeaderContainer from "../guest/containers/HeaderContainer";
import {ProfileHeaderContainer} from "../profile/containers/ProfileHeaderContainer";

const HeaderRouter = () => {
    return <HashRouter>
        <Switch>
            <PrivateRoute path="/" component={ProfileHeaderContainer} guestComponent={HeaderContainer}/>
            <Route component={() => "error page"} />
        </Switch>
    </HashRouter>;
};

export {
    HeaderRouter,
};