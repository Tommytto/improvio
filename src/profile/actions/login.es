import {getFromStorage, putInStorage, removeFromStorage} from "../../common/helpers/storage.es";
import {ActionTypes as LoginActionTypes} from "../constants/login.es";
import {ActionTypes as ProfileActionTypes} from "../constants/profile.es";
import {ActionTypes as CourseActionTypes} from "src/course/constants/course.es";
import {schemeProfile} from "src/profile/scheme/profile.es";

const login = (formData) => async (dispatch, getState, {ProfileApi}) => {
    try {
        const {data} = await ProfileApi.auth(formData);
        if (data.error) {
            throw data.error;
        }
        if (data && data.email && data.password) {
            putInStorage('id', data.id);
            putInStorage('email', data.email);
            putInStorage('password', data.password);
            const normData = schemeProfile(data);
            dispatch({type: ProfileActionTypes.SET_PROFILE_SUCCESS, payload: normData});
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS});
        }

    } catch (err) {
        console.error(err);
    }

};

const checkLogin = () => (dispatch) => {
    const email = getFromStorage('email');
    const password = getFromStorage('password');
    if (email && password) {
        dispatch(login({email, password}));
    }
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