import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Table } from '../components/table';

import Header from './components/header';
import Navbar from './components/navbar';

import * as calendarActions from '../store/actions/calendar/index';

import * as Styled from './styles';

function Main({ calendar }) {
    const dispatch = useDispatch();

    useEffect(() => {
        !calendar.length && dispatch(calendarActions.getCalendar());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const tableColumns = [
        { title: 'Candidate', spanWidth: 3 },
        { title: 'Interview Step', spanWidth: 2 },
        { title: 'Scheduled time', spanWidth: 6 }
    ];

    return (
        <Styled.Wrapper>
            <Header />
            <Navbar />
            <Styled.Body>
                <Table columns={tableColumns} data={calendar} />
            </Styled.Body>
        </Styled.Wrapper>
    );
}

const mapStateToProps = (state) => ({
    calendar: state.calendar.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
