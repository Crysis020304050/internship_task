import axios from 'axios';
import constants from "../constants";
import {refreshTokensCase, unauthorizedCase} from './interceptorFunctions';

const {LINKS: {BASE_URL}, TOKENS: {ACCESS_TOKEN_KEY}} = constants;

const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
    config.headers.authorization = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    return config;
}, (err) => Promise.reject(err));

instance.interceptors.response.use(response => response, async err => {
    const {response: {status}, config} = err;
    switch (status) {
        case 419: {
            return await refreshTokensCase(config);
        }
        case 401: {
            return unauthorizedCase();
        }
        default: {
            return Promise.reject(err);
        }
    }
});

export default instance;