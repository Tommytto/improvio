import {MODULE_NAME} from "../constants/config.es";

function selectorProfileData(state) {
    return state[MODULE_NAME].profile;
}

function selectorIsLogin(state) {
    return selectorProfileData(state).isLogin;
}

function selectorProfileId(state) {
    return selectorProfileData(state).id;
}



export {
    selectorProfileData,
    selectorIsLogin,
    selectorProfileId,
};