
const register = (formData) => async (dispatch, getState, {ProfileApi}) => {
    const response = await ProfileApi.register(formData);
    console.log(response);
};

export {
    register,
};