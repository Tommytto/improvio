import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import {Button} from 'reactstrap';

import {openModal} from 'src/modal/index.es';
import {Header as CommonHeader} from 'src/common/index.es';
import {selectorProfileData} from "../../selectors/profile.es";
import {logout} from "../../actions/login.es";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

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

class ProfileHeader extends Component {
    constructor() {
        super();

        this.initBem();
    }

    initBem() {
        this.block = bemCn('profile-header');
    }

    onClickExit = () => {
        this.props.logout();
    };

    render() {
        const {profile} = this.props;
        return (
            <CommonHeader>
                <div className="m-r-20">
                    {this.renderTeacherButtons()}
                    <span className='oi oi-person m-r-10'/>
                    <span>{profile.lastName}</span>
                    &nbsp;
                    <span className="m-r-10">{profile.firstName}</span>
                    <Button outline onClick={this.onClickExit} color="danger">Выйти</Button>
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

const ProfileHeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileHeader));
export {
    ProfileHeaderContainer,
};