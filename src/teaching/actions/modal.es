import {ActionTypes} from '../constants/modal'

function openModal(modalKey) {
    console.log(modalKey);
    return {
        type: ActionTypes.OPEN_MODAL,
        payload: modalKey,
    }
}

function closeModal(modalKey) {
    return {
        type: ActionTypes.CLOSE_MODAL,
        payload: modalKey,
    }
}

export {
    openModal,
    closeModal,
};