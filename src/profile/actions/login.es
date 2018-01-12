import {getFromStorage, putInStorage} from "../../common/helpers/storage.es";
import {ActionTypes as LoginActionTypes} from "../constants/login.es";
import {ActionTypes as ProfileActionTypes} from "../constants/profile.es";

const login = (formData) => async (dispatch, getState, {ProfileApi}) => {
    dispatch({type: LoginActionTypes.LOGIN});
    let responseData;
    try {
        const {data} = await ProfileApi.auth(formData);
        responseData = data;
        if (responseData && responseData.email) {
            putInStorage('isLogin', true);
            dispatch({type: ProfileActionTypes.SET_PROFILE_SUCCESS, payload: responseData});
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS});
        }
    } catch (err) {
        console.log(err);
        dispatch({type: LoginActionTypes.LOGIN_ERROR});
    }

};

const checkLogin = () => async (dispatch) => {
    if (!!getFromStorage('isLogin')) {
        dispatch({type: LoginActionTypes.LOGIN_SUCCESS});
    }
};

export {
    login,
    checkLogin,
};