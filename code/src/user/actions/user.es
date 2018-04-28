import {ActionTypes} from "src/user/constants/user.es";
import {schemeUser} from "src/user/scheme/user.es";

const getUser = (userId) => async (dispatch, getState, {UserApi}) => {
    dispatch({type: ActionTypes.GET_USER_START});
    try {
        const {data} = await UserApi.getUser(userId);
        const normData = schemeUser(data);
        dispatch({type: ActionTypes.GET_USER_SUCCESS, payload: normData});

    } catch (error) {
        dispatch({type: ActionTypes.GET_USER_FAIL});
        console.error(error);

    }
};

export {
    getUser,
};