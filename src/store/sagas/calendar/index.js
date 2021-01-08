import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../actions/index';

import * as api from '../../../services/api';

export function* getCalendarSaga({ payload }) {
    try {
        const data = yield call(api.getCalendar, payload);

        yield put({
            type: actionTypes.GET_CALENDAR_SUCCESS,
            payload: { calendar: data || {} }
        });
    } catch (error) {
        // console.log('error: ', error);
        yield put({
            type: actionTypes.GET_CALENDAR_ERROR,
            payload: error
        });
    }
}

export default all([takeLatest(actionTypes.GET_CALENDAR, getCalendarSaga)]);
