import { all } from 'redux-saga/effects';

import calendar from './calendar/index';

export default function* rootSaga() {
    return yield all([calendar]);
}
