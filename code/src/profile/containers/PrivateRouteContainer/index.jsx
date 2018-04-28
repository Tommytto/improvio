import React from 'react';
import {connect} from 'react-redux';
import bemCn from 'bem-cn';

import {selectorIsLogin} from "../../selectors/profile.es";
import {Route} from "react-router-dom";

const block = bemCn('course');

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */

function mapStateToProps (state) {
    return {
        isLogin: selectorIsLogin(state),
    };
}

class PrivateRouteContainer extends React.Component {

    render() {
        const {exact, path} = this.props;
        return <Route exact={exact} path={path} render={this.renderComponent}/>
    }

    renderComponent = () => {
        const {isLogin, component: Component, guestComponent: GuestComponent} = this.props;

        return isLogin ? <Component/> : <GuestComponent/>;
    }


}

const PrivateRoute = connect(mapStateToProps)(PrivateRouteContainer);
export{
    PrivateRoute,
};