import axios from 'axios';
import constants from "../constants";

const instance = axios.create({
    baseURL: constants.LINKS.BASE_URL,
});

instance.interceptors.request.use(config => {
    config.headers.authorization = sessionStorage.getItem(constants.TOKENS.ACCESS_TOKEN_KEY);
    return config;
}, (err) => Promise.reject(err));

export default instance;