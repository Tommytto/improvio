import BaseApi from "api/base-api.es";

class StageApi extends BaseApi {
    createStage(data) {
        return this.request('/api/stage', 'POST', data);
    }
}

export {
    StageApi,
};