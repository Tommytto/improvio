import {MODULE_NAME} from '../constants/config.es';

function selectStageStore(state) {
    return state[MODULE_NAME].stage;
}

function selectStageData(state) {
    return selectStageStore(state).data;
}

function selectStage(state, stageId) {
    return selectStageData(state)[stageId];
}

function selectStageDataByList(state, stageList) {
    if (!stageList) {
        return null;
    }
    return stageList.reduce((result, stageKey) => {
        const stage = selectStage(state, stageKey);
        if (stage) {
            result[stageKey] = stage;
        }
        return result;
    }, {})
}

export {
    selectStage,
    selectStageData,
    selectStageStore,
    selectStageDataByList,
}