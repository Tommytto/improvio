import BaseApi from "api/base-api.es";

class UserApi extends BaseApi{
    getUser(userId) {
        return this.request(`/api/user/${userId}`, 'GET');
    }
}

export {
    UserApi,
};