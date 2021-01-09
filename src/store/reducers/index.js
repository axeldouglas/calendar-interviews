import { combineReducers } from 'redux';
import calendarReducer from './calendar/index';
import futureInterviewReducer from './futureInterview/index';

export default combineReducers({
    calendar: calendarReducer,
    futureInterview: futureInterviewReducer
});
