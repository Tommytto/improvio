import React from 'react';
import './style.less';
import {Modal as BootstrapModal} from 'reactstrap';

class Modal extends React.Component {
    render() {
        const {isOpen, closeModal, children} = this.props;
        console.log(this.props);
        return (
            <BootstrapModal
                isOpen={isOpen}
                toggle={closeModal}>
                {children}
            </BootstrapModal>
        )
    }
}

export {
    Modal,
};