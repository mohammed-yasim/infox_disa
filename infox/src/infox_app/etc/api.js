import axios from 'axios';
import { Toast } from 'antd-mobile';
import { getToken, removeUserSession } from './auth_handler';
const request_config_capture = function (config) {
    config['headers']['Authorization'] = getToken();
    Toast.loading('synchronizing', 0, true);
    return config;
}
const request_error_capture = function (error) {
    return Promise.reject(error);
}
const response_capture = function (response) {
    Toast.hide();
    return response;
}
const response_error_capture = function (error) {
    var err = ''
    try {
        err = error.response.data;
        if (error.response.status === 401) {
            Toast.fail(`${err}`, 3, null, false);
            removeUserSession();
            //window.location.reload()
        } else if (error.response.status === 403) {
            Toast.fail(`${err}`, 3, null, false);
        } else {
            Toast.fail(`${err} ${error}`, 1, null, false);
        }
    } catch (e) {
        err = " - ";
        Toast.offline(`${err} ${error}`);
    }
    return Promise.reject(error);
}
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
let baseURL = API_ENDPOINT;
let config = {
    baseURL: baseURL,
};
let infoxAPI = axios.create(config);
infoxAPI.interceptors.request.use(request_config_capture, request_error_capture);
infoxAPI.interceptors.response.use(response_capture, response_error_capture);
export { infoxAPI }