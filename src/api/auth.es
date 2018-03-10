import BaseApi from "api/base-api.es";

class AuthApi extends BaseApi{
    register(data) {
        return this.request('/api/user', 'POST', data);
    }

    login(data) {
        return this.request('/api/auth', 'POST', data);
    }
}

export {
    AuthApi,
};