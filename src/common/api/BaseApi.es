import {convertToFormData} from "../helpers/ajax.es";

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
            method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
        };
        if (data) {
            options.body = JSON.stringify(data);
        }
        if (haveFile) {
            options.body = convertToFormData(data);
            options.headers['content-type'] = 'multipart/form-data';
        }
        const response = await fetch(url, options);
        const responseData = await response.json();
        return {
            status: response.status,
            data: responseData,
        }
    }
};
