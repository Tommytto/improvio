import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ModalRegister from '../../components/ModalRegister';
import {ModalTypes} from '../../constants/config.es';
import {closeModal, selectorModal} from 'src/modal/index.es';
import {register} from "../../../profile/actions/register.es";

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        isOpen: selectorModal(state, ModalTypes.REGISTER),
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
        closeModal: () => closeModal(ModalTypes.REGISTER),
        register,
    }, dispatch);
}

class ModalRegisterWrap extends Component {

    onSubmit = async (event, formData) => {
        const {register, closeModal} = this.props;
        event.preventDefault();
        await register(formData);
        closeModal();
    };

    render() {
        const {closeModal, isOpen} = this.props;
        return(
            <ModalRegister closeModal={closeModal} isOpen={isOpen} onSubmit={this.onSubmit}/>
        )
    }
}

const ModalRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(ModalRegisterWrap);
export default ModalRegisterContainer;