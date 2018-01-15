import {login} from "src/profile/actions/login.es";

const register = (formData) => async (dispatch, getState, {ProfileApi}) => {
    const {data} = await ProfileApi.register(formData);
    dispatch(login(data));
};

export {
    register,
};