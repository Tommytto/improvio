import React from 'react';
import {HashRouter, Router, Switch} from 'react-router-dom';
import {PrivateRoute} from "../profile/containers/PrivateRouteContainer";
import HeaderContainer from "../guest/containers/HeaderContainer";
import {ProfileHeaderContainer} from "../profile/containers/ProfileHeaderContainer";

const HeaderRouter = () => {
    return <HashRouter>
        <Switch>
            <PrivateRoute component={ProfileHeaderContainer} guestComponent={HeaderContainer}/>
        </Switch>
    </HashRouter>;
};

export {
    HeaderRouter,
};