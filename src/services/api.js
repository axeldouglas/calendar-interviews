import axios from 'axios';

const API = () => {
    const api = axios.create({
        baseURL: 'https://api-test.vanhack.dev'
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

export const getCalendar = async () => {
    return new Promise((resolve, reject) => {
        const api = API();
        api.get(`/Calendar`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default getCalendar;
