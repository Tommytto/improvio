import {ActionTypes} from "course/constants/stage.es";


const createStage = (stageData) => async (dispatch, getState, {StageApi}) => {
    dispatch({type: ActionTypes.CREATE_STAGE_START});
    try {
        const {data} = await StageApi.createStage({courseId: 1, name: "Hello"});
        console.log(data);
        // const normData = schemeCourse(data);
        // dispatch({type: ActionTypes.CREATE_STAGE_SUCCESS, payload: normData});
    } catch (error) {
        dispatch({type: ActionTypes.CREATE_STAGE_FAIL});
        console.error(error);
    }
};

export {
    createStage,
};
