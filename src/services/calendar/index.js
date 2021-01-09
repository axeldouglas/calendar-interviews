import API from '../api';

const api = API();

export const getCalendar = async () => {
    return new Promise((resolve, reject) => {
        api.get(`/calendar`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const getInterviewLink = async (id) => {
    return new Promise((resolve, reject) => {
        api.get(`/calendar/interviewlink/${id}`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const moveNextStep = async (id, body = {}) => {
    return new Promise((resolve, reject) => {
        api.post(`/calendar/movenextstep/${id}`, body)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const rejectCandidate = async (id, body = {}) => {
    return new Promise((resolve, reject) => {
        api.post(`/calendar/reject/${id}`, body)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
