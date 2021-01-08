import * as actionTypes from '../index';

const getCalendar = (payload) => ({
    type: actionTypes.GET_CALENDAR,
    payload
});

export default getCalendar;
