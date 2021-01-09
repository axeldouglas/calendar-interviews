import * as actionTypes from '../../actions/index';

const initialState = {
    data: [],
    error: {}
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.FUTURE_INTERVIEW_SUCCESS:
            return { ...state, data: action.payload.futureInterview };
        case actionTypes.FUTURE_INTERVIEW_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};

export default reducer;
