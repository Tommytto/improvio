import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from "../profile/containers/PrivateRouteContainer";
import HeaderContainer from "../guest/containers/HeaderContainer";
import {ProfileHeaderContainer} from "../profile/containers/ProfileHeaderContainer";

const HeaderRouter = () => {
    return <BrowserRouter>
        <Switch>
            <PrivateRoute path="/" component={ProfileHeaderContainer} guestComponent={HeaderContainer}/>
            <Route component={() => "error page"} />
        </Switch>
    </BrowserRouter>;
};

export {
    HeaderRouter,
};