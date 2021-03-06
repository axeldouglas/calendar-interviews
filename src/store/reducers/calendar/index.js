import * as actionTypes from '../../actions/index';

const initialState = {
    data: [],
    error: {}
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.CALENDAR_SUCCESS:
            return { ...state, data: action.payload.calendar };
        case actionTypes.CALENDAR_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};

export default reducer;
