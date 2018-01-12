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
     * @param {object}      headers
     *
     * @returns {Promise}
     */
    async request (url, method = 'GET', data = null, headers = {}) {
        const options = {
            method,
            credentials: 'include',
            headers: {
                ...headers,
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, options);
        const responseData = await response.json();
        return {
            status: response.status,
            data: responseData,
        }
    }
};
