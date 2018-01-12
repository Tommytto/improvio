import {MODULE_NAME} from '../constants/config.es';

function selectorModalState(state) {
    return state[MODULE_NAME].modal;
}

function selectorModal(state, modalKey) {
    return selectorModalState(state)[modalKey];
}

export {
    selectorModalState,
    selectorModal,
};