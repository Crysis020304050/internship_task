import constants from "../../constants";
import history from "../../browserHistory";
import {refreshTokens} from "../authentication";
import {setTokens, clearStorage} from "../../utils";
import instance from "../index";

export const refreshTokensCase = async (config) => {
    const {data} = await refreshTokens({
        refreshToken: localStorage.getItem(constants.TOKENS.REFRESH_TOKEN_KEY),
    });
    if (data) {
        setTokens(data);
        return instance.request(config);
    } else {
        clearStorage();
        history.replace('/login');
    }
};

export const unauthorizedCase = () => {
    clearStorage();
    history.replace('/login');
};