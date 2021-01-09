import axios from 'axios';

const API = () => {
    const api = axios.create({
        baseURL: 'https://api-test.vanhack.dev'
    });

    api.interceptors.request.use(async (config) => {
        const headerConfig = config;
        headerConfig.headers.post['Content-Type'] =
            'application/json; charset=utf-8';
        headerConfig.headers.post['Access-Control-Allow-Origin'] = '*';
        headerConfig.headers['Accept-Encoding'] = 'gzip, deflate, br';
        headerConfig.headers.Accept = '*/*';
        headerConfig.headers.Connection = 'keep-alive';
        return headerConfig;
    });

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return api;
};

export default API;
