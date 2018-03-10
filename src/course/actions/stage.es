import {ActionTypes} from "course/constants/stage.es";
import {ActionTypes as CourseActionTypes} from "course/constants/course.es";
import {schemeStage} from "course/scheme/stage.es";

const createStage = (stageData) => async (dispatch, getState, {StageApi}) => {
    dispatch({type: ActionTypes.CREATE_STAGE_START});
    try {
        const {data} = await StageApi.createStage(stageData);
        const normData = schemeStage(data);

        dispatch({type: ActionTypes.CREATE_STAGE_SUCCESS, payload: normData});
        dispatch({
            type: CourseActionTypes.SET_COURSE_STAGE,
            payload: {
                courseId: stageData.courseId,
                stage: normData.result,
            }
        })
    } catch (error) {
        dispatch({type: ActionTypes.CREATE_STAGE_FAIL});
        console.error(error);
    }
};

const getStage = (stageId) => async (dispatch, getState, {StageApi}) => {
    try {
        const {data} = await StageApi.getStage(stageId);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

export {
    createStage,
    getStage,
};
