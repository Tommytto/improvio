import BaseApi from "src/common/api/BaseApi.es";

class Api extends BaseApi{
    getUser(userId) {
        return this.request(`/api/users/${userId}`, 'GET');
    }
}

export {
    Api,
};