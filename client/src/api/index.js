import axios from 'axios';
import constants from "../constants";

const instance = axios.create({
    baseURL: constants.LINKS.BASE_URL,
});

export default instance;