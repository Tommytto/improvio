import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';

import {openModal} from 'src/modal/index.es';
import {selectorProfileData} from "../../selectors/profile.es";
import {logout} from "../../actions/login.es";
import './style.less';
import {Button} from "reactstrap";

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

class ProfileCard extends Component {
    constructor() {
        super();
        this.state = {
            isProfileOpen: false,
        };
        this.initBem();
    }

    initBem() {
        this.block = bemCn('profile-card')
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.hideProfileInfo);
    }

    profileClick = (e) => {
        e.stopPropagation();
        if (this.state.isProfileOpen) {
            window.removeEventListener('click', this.hideProfileInfo);
        } else {
            window.addEventListener('click', this.hideProfileInfo)
        }
        this.setState({
            isProfileOpen: !this.state.isProfileOpen,
        });
    };

    hideProfileInfo = () => {
        this.setState({
            isProfileOpen: false,
        });
    };

    onClickExit = () => {
        this.props.logout();
    };

    render() {
        const {profile} = this.props;
        return (
            <div className={this.block()}>
                <div className={this.block('toggle')()} onClick={this.profileClick}>
                    <span className="m-r-10">
                        {profile.firstName}
                    </span>
                    <span>
                        <i className="far fa-user-circle fa-2x"/>
                    </span>
                </div>
                <div className={this.block('info', {open: this.state.isProfileOpen}).mix('white-box')()}>
                    <h4 className="m-b-0">{profile.lastName}</h4>
                    <h4>{profile.firstName}</h4>
                    <small className="text-muted">{profile.email}</small>
                    <hr/>
                    <Button block outline onClick={this.onClickExit} color="danger">Выйти</Button>
                </div>
            </div>
        )
    }
}

const ProfileCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
export {
    ProfileCardContainer,
};