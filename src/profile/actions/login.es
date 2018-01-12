import {getFromStorage, putInStorage, removeFromStorage} from "../../common/helpers/storage.es";
import {ActionTypes as LoginActionTypes} from "../constants/login.es";
import {ActionTypes as ProfileActionTypes} from "../constants/profile.es";

const login = (formData) => async (dispatch, getState, {ProfileApi}) => {
    let responseData;
    try {
        const {data} = await ProfileApi.auth(formData);
        responseData = data;
        if (responseData && responseData.email && responseData.password) {
            putInStorage('id', responseData.id);
            putInStorage('email', responseData.email);
            putInStorage('password', responseData.password);
            dispatch({type: ProfileActionTypes.SET_PROFILE_SUCCESS, payload: responseData});
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS});
        }
    } catch (err) {
        console.log(err);
    }

};

const checkLogin = () => (dispatch) => {
    const email = getFromStorage('email');
    const password = getFromStorage('password');
    dispatch(login({email, password}));
};

const logout = () => (dispatch) => {
    removeFromStorage('id');
    removeFromStorage('email');
    removeFromStorage('password');
    dispatch({type: LoginActionTypes.CLEAR_STORE});
};

export {
    login,
    logout,
    checkLogin,
};