import {MODULE_NAME} from "../constants/config.es";

function selectorProfileData(state) {
    return state[MODULE_NAME].profile;
}

function selectorIsLogin(state) {
    return selectorProfileData(state).isLogin;
}



export {
    selectorProfileData,
    selectorIsLogin,
};