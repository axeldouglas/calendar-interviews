import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../actions/index';

import * as api from '../../../services/calendar/index';

export function* getCalendarSaga({ payload }) {
    try {
        const { data: calendar } = yield call(api.getCalendar, payload);

        yield put({
            type: actionTypes.CALENDAR_SUCCESS,
            payload: { calendar }
        });
    } catch (error) {
        yield put({
            type: actionTypes.CALENDAR_ERROR,
            payload: error
        });
    }
}

export default all([takeLatest(actionTypes.GET_CALENDAR, getCalendarSaga)]);
