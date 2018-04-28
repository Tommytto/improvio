import {login} from "src/profile/actions/login.es";

const register = (formData) => async (dispatch, getState, {AuthApi}) => {
    const {data} = await AuthApi.register(formData);
    dispatch(login(data));
};

export {
    register,
};