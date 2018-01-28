import BaseApi from "api/base-api.es";

class StageApi extends BaseApi {
    createStage(data) {
        return this.request('/api/stage', 'POST', data);
    }

    getStage(stageId) {
        return this.request(`/api/stage/${stageId}`, 'GET');
    }
}

export {
    StageApi,
};