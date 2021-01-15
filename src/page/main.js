import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Button from '../components/button';
import FacePile from '../components/facePile';
import { Nav, TabContent, TabLink } from '../components/navTabs';
import Badge from '../components/badge';
import Dropdown from '../components/dropdown';
import JobDescription from '../components/jobDescription';

import { ReactComponent as Kiwi } from '../assets/svg/animals/kiwi.svg';
import { ReactComponent as ExclamationIcon } from '../assets/svg/exclamation-circle.svg';

import * as calendarActions from '../store/actions/calendar/index';

import * as Styled from './styles';

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

    const skills = ['Machine Learning', 'Signal R', 'Dapper', 'Deep Learning'];
    const badgeList = skills.map((skill, key) => (
        <Badge key={`badge_${key}`} text={skill} />
    ));
    const mockJobDescriptionOptions = [
        {
            icon: <Kiwi />,
            item: badgeList
        },
        {
            icon: <Kiwi />,
            item: 'Cancel request'
        }
    ];

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.TitleContainer>
                    <Styled.Title>
                        Principal Product Manager @Driftwood sidecorp
                        <Styled.Popover>
                            <JobDescription
                                type="icon"
                                icon={<ExclamationIcon />}
                                options={mockJobDescriptionOptions}
                            />
                        </Styled.Popover>
                    </Styled.Title>
                </Styled.TitleContainer>
                <Styled.HeaderOptions>
                    <Button size="lg" text="Edit job" />
                    <Styled.FacePileContainer>
                        <FacePile numFaces={2} faces={mockFacepile} />
                    </Styled.FacePileContainer>
                </Styled.HeaderOptions>
            </Styled.Header>
            <Styled.Navbar>
                <Nav active="calendar">
                    <TabLink tabKey="calendar">Calendar</TabLink>
                    <TabLink tabKey="next_interviews">Next Interviews</TabLink>
                </Nav>
            </Styled.Navbar>
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
            <hr />
            Job description:
            <JobDescription
                type="icon"
                icon={<Kiwi />}
                options={mockJobDescriptionOptions}
            />
        </Styled.Wrapper>
    );
}

const mapStateToProps = (state) => ({
    calendar: state.calendar.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
