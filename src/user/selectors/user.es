import {MODULE_NAME} from "../constants/config.es";

function selectorUserState(state) {
    return state[MODULE_NAME].user;
}

function selectorUserData(state) {
    return selectorUserState(state).data;
}

function selectorUserList(state) {
    return selectorUserState(state).list;
}

function selectorUser(state, userId) {
    return selectorUserData(state)[userId];
}



export {
    selectorUserState,
    selectorUserData,
    selectorUserList,
    selectorUser,
};