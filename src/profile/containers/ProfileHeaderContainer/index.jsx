import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import {Button} from 'reactstrap';

import {openModal} from 'src/modal/index.es';
import {Header as CommonHeader} from 'src/common/index.es';
import {selectorProfileData} from "../../selectors/profile.es";

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

    render() {
        const {profile} = this.props;
        console.log(profile);
        return (
            <CommonHeader>
                <span className="m-l-20">I M P </span>
                <div className="m-r-20">
                    <span className='oi oi-person m-r-10'/>
                    <span>{profile.lastName}</span>
                    &nbsp;
                    <span className="m-r-10">{profile.firstName}</span>
                    <Button outline color="danger">Выйти</Button>
                </div>
            </CommonHeader>
        )
    }
}

const ProfileHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
export {
    ProfileHeaderContainer,
};