import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import {ModalLogin} from '../../components/ModalLogin';
import {ModalTypes} from '../../constants/config.es';
import {closeModal, selectorModal} from 'src/modal/index.es';
import {guestLogin} from '../../actions/login.es';
import {login} from "../../../profile/actions/login.es";
import {getFromStorage} from "../../../common/helpers/storage.es";

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        isOpen: selectorModal(state, ModalTypes.LOGIN),
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        closeModal: () => closeModal(ModalTypes.LOGIN),
        login,
    }, dispatch);
}

class ModalLoginCont extends Component {

    onSubmit = async (event, formData) => {
        const {history, closeModal, login} = this.props;
        event.preventDefault();
        await login(formData);
        closeModal();
    };

    render() {
        const {closeModal, isOpen} = this.props;
        return(
            <ModalLogin closeModal={closeModal} isOpen={isOpen} onSubmit={this.onSubmit}/>
        )
    }
}

const ModalLoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalLoginCont));

export {
    ModalLoginContainer,
};