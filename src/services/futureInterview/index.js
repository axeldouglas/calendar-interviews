import API from '../api';

const api = API();

export const getFutureInterview = async () => {
    return new Promise((resolve, reject) => {
        api.get(`/interview/future`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default getFutureInterview;
