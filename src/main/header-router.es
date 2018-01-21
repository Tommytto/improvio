import React from 'react';
import {HashRouter, Router, Switch} from 'react-router-dom';
import {PrivateRoute} from "../profile/containers/PrivateRouteContainer";
import HeaderContainer from "../guest/containers/HeaderContainer";
import {UserHeaderContainer} from "user/containers/UserHeaderContainer";

const HeaderRouter = () => {
    return <HashRouter>
        <Switch>
            <PrivateRoute component={UserHeaderContainer} guestComponent={HeaderContainer}/>
        </Switch>
    </HashRouter>;
};

export {
    HeaderRouter,
};