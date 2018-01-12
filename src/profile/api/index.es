import BaseApi from "../../common/api/BaseApi.es";

class Api extends BaseApi{
    register(data) {
        return this.request('/api/users', 'POST', data);
    }

    auth(data) {
        return this.request('/api/auth', 'POST', data);
    }
}

export {
    Api,
};