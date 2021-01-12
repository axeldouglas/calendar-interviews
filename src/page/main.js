import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Button from '../components/button';

import * as calendarActions from '../store/actions/calendar/index';

function Main({ calendar }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calendarActions.getCalendar());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            Main Page <Button size="sm" text="Teste Axel" />
        </>
    );
}

const mapStateToProps = (state) => ({
    calendar: state.calendar.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
