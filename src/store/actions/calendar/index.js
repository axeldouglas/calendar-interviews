import * as actionTypes from '../index';

export const getCalendar = (payload) => ({
    type: actionTypes.GET_CALENDAR,
    payload
});

export const getInterviewLink = (payload) => ({
    type: actionTypes.GET_INTERVIEW_LINK,
    payload
});

export const moveNextStep = (payload) => ({
    type: actionTypes.MOVE_NEXT_STEP,
    payload
});

export const rejectCandidate = (payload) => ({
    type: actionTypes.REJECT_CANDIDATE,
    payload
});

export const requestFailure = (error) => ({
    type: actionTypes.CALENDAR_ERROR,
    payload: { error }
});
