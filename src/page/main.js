import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'recompose';

import * as calendarActions from '../store/actions/calendar/index';

function Main({ calendar }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calendarActions.getCalendar());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>Main Page</>;
}

const mapStateToProps = (state) => ({
    calendar: state.calendar.data
});

const mapDispatchToProps = {};

export default compose(
    // withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Main);