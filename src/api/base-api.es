import {convertToFormData} from "common/helpers/ajax.es";

export default class BaseApi {
    // constructor (base = '') {
    //     this.base = base;
    // }

    /**
     * Метод посылает запрос на
     *
     * @param {string}      url
     * @param {string}      method
     * @param {FormData}    data
     * @param {boolean}      haveFile
     *
     * @returns {Promise}
     */
    async request (url, method = 'GET', data = null, haveFile = false) {
        let options = {
            method: 'GET',
            credentials: 'include',
            headers: {},
        };
        if (method.toUpperCase() !== options.method.toUpperCase()) {
            options.method = 'POST';
            options.headers['X-HTTP-Method-Override'] = method;
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        if (haveFile) {
            options.body = convertToFormData(data);
            // options.headers['content-type'] = 'multipart/form-data';
        } else {
            options.headers['content-type'] = 'application/json';
        }
        const response = await fetch(url, options);
        const responseData = await response.json();
        return {
            status: response.status,
            data: responseData,
        }
    }
};
