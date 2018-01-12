import BaseApi from './BaseApi';

export default class ApiExample extends BaseApi {
    get () {
        return this.request('/app-data.json', 'GET');
    }

    create (data) {
        return this.request('/app-data.json', 'CREATE', data);
    }

    update (data) {
        return this.request('/app-data.json', 'PUT', data);
    }

    delete (data) {
        return this.request('/app-data.json', 'DELETE', data);
    }
};