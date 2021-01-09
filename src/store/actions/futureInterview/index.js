import * as actionTypes from '../index';

export const getFutureInterview = (payload) => ({
    type: actionTypes.GET_FUTURE_INTERVIEW,
    payload
});

export const requestFailure = (error) => ({
    type: actionTypes.FUTURE_INTERVIEW_ERROR,
    payload: { error }
});
