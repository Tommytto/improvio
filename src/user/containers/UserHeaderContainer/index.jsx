import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import {Button} from 'reactstrap';

import {openModal} from 'src/modal/index.es';
import {Header as CommonHeader} from 'src/common/index.es';
import {selectorProfileData} from "profile/selectors/profile.es";
import {logout} from "profile/actions/login.es";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {ProfileCardContainer} from "../../../profile/containers/ProfileCardContainer";

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state) {
    return {
        profile: selectorProfileData(state)
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openModal,
        logout,
    }, dispatch);
}

class UserHeader extends Component {
    constructor() {
        super();

        this.initBem();
    }

    initBem() {
        this.block = bemCn('user-header');
    }

    render() {
        const {profile} = this.props;
        return (
            <CommonHeader>
                <div className="d-flex">
                    {this.renderTeacherButtons()}
                    <ProfileCardContainer/>
                </div>
            </CommonHeader>
        )
    }

    renderTeacherButtons() {
        const {location} = this.props;
        if ("/teaching" === location.pathname) {
            return <Button tag={Link} to="/teaching/course-creating" className="m-r-40" color="primary">Создать курс</Button>
        }
        return <Button tag={Link} to="/teaching" className="m-r-40" color="primary">Преподавательская</Button>
    }
}

const UserHeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserHeader));
export {
    UserHeaderContainer,
};