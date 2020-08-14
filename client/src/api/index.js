import axios from 'axios';
import constants from "../constants";
import history from "../browserHistory";
import {refreshTokens} from "./authentication";
import {setTokens, clearStorage} from "../utils";

const {LINKS: {BASE_URL}, TOKENS: {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY}} = constants;

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
            const {data} = await refreshTokens({
                refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
            });
            if (data) {
                setTokens(data);
                return instance.request(config);
            } else {
                clearStorage();
                history.replace('/login');
            }
            break;
        }
        case 401: {
            clearStorage();
            history.replace('/login');
            break;
        }
        default: {
            return Promise.reject(err);
        }
    }
    return Promise.reject(err);
});

export default instance;