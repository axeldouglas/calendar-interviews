import * as actionTypes from '../../actions/index';

const initialState = {
    data: [],
    error: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_CALENDAR_SUCCESS:
            return { ...state, data: action.payload.calendar };
        case actionTypes.GET_CALENDAR_ERROR:
            return { ...state, error: action.payload };
        case actionTypes.GET_INTERVIEW_LINK:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
