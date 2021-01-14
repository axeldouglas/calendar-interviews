import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Button from '../components/button';
import FacePile from '../components/facePile';
import { Nav, TabContent, TabLink } from '../components/navTabs';
import Badge from '../components/badge';
import Dropdown from '../components/dropdown';

import { ReactComponent as Kiwi } from '../assets/svg/animals/kiwi.svg';

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

    const mockDropdownOptions = [
        {
            item: 'Send the request again',
            onClick: () => {}
        },
        {
            item: 'Cancel request',
            onClick: () => {}
        }
    ];

    return (
        <>
            Button:
            <Button size="sm" text="Teste Axel" />
            <Button size="lg" text="Teste MD" variant="danger" />
            <hr />
            Face Pile:
            <FacePile numFaces={2} faces={mockFacepile} />
            <hr />
            Nav Tabs:
            <Nav active="axel">
                <TabLink tabKey="juh">Hi</TabLink>
                <TabLink tabKey="axel">Hello</TabLink>
                <TabContent tabKey="juh">Eu sou Juh</TabContent>
                <TabContent tabKey="axel">Eu sou Axel</TabContent>
            </Nav>
            <hr />
            Badge Pill:
            <Badge
                size="sm"
                text="Teste Axel"
                type="pill"
                variant="warning-outline"
            />
            <hr />
            Badge:
            <Badge text="Teste Axel" />
            <hr />
            Dropdown:
            <Dropdown
                type="icon"
                icon={<Kiwi />}
                options={mockDropdownOptions}
            />
            <Dropdown text="Dropdown Axel" options={mockDropdownOptions} />
            <br />
            <Dropdown
                size="sm"
                text="Dropdown Axel"
                options={mockDropdownOptions}
            />
            <br />
            <Dropdown
                size="lg"
                text="Dropdown Axel"
                options={mockDropdownOptions}
            />
        </>
    );
}

const mapStateToProps = (state) => ({
    calendar: state.calendar.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
