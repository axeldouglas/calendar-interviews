import React from 'react';

import { Nav, TabLink } from '../../../components/navTabs';

import * as Styled from './styles';

const navbar = () => {
    return (
        <Styled.Navbar>
            <Nav active="calendar">
                <TabLink tabKey="calendar">Calendar</TabLink>
                <TabLink tabKey="next_interviews">Next Interviews</TabLink>
            </Nav>
        </Styled.Navbar>
    );
};

export default navbar;
