import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import {Button} from 'reactstrap';

import {openModal} from 'src/modal/index.es';
import {Header as CommonHeader} from 'src/common/index.es';
import {selectorProfileData} from "../../selectors/profile.es";
import {logout} from "../../actions/login.es";

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

    render() {
        const {children, shortName} = this.props;
        return (
            <div className={this.block({open: this.state.isProfileOpen})()}>

            </div>
        )
    }
}

const ProfileCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
export {
    ProfileCardContainer,
};