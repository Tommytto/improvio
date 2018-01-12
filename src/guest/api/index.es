import Auth from './Auth';

export default class Api {
    constructor (base = '') {
        this.Auth = new Auth(base);
    }
}
