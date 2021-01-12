import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Button from '../components/button';
import FacePile from '../components/facePile';

import * as calendarActions from '../store/actions/calendar/index';

function Main({ calendar }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calendarActions.getCalendar());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const mockFacepile = [
        {
            name: 'Dmitry Kalinin',
            avatar: 'https://thispersondoesnotexist.com/image'
        },
        {
            name: 'Ivan Ivanov',
            avatar: null
        },
        {
            name: 'Alex Kalinin',
            avatar: null
        },
        {
            name: 'Ivanov Kalinin',
            avatar: 'https://thispersondoesnotexist.com/image'
        }
    ];

    return (
        <>
            Button: <Button size="sm" text="Teste Axel" />
            Face Pile <FacePile numFaces={2} faces={mockFacepile} />
        </>
    );
}

const mapStateToProps = (state) => ({
    calendar: state.calendar.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
