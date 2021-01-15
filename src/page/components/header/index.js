import React from 'react';

import Button from '../../../components/button';
import FacePile from '../../../components/facePile';
import JobDescription from '../../../components/jobDescription';
import Badge from '../../../components/badge';

import { ReactComponent as ExclamationIcon } from '../../../assets/svg/exclamation-circle.svg';
import { ReactComponent as BuildIcon } from '../../../assets/svg/build.svg';
import { ReactComponent as DollarIcon } from '../../../assets/svg/dollar.svg';
import { ReactComponent as PinIcon } from '../../../assets/svg/pin.svg';
import { ReactComponent as SkillsIcon } from '../../../assets/svg/skills.svg';
import { ReactComponent as UserIcon } from '../../../assets/svg/user-circle.svg';

import * as Styled from './styles';

const header = () => {
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
            avatar: 'https://thispersondoesnotexist.com/image'
        },
        {
            name: 'Ivanov Kalinin',
            avatar: 'https://thispersondoesnotexist.com/image'
        },
        {
            name: 'Ivan Ivanov',
            avatar: null
        }
    ];

    const skills = [
        'Machine Learning',
        'Signal R',
        'Dapper',
        'Deep Learning',
        'DevOps'
    ];
    const badgeList = skills.map((skill, key) => (
        <Badge key={`badge_${key}`} text={skill} />
    ));
    const jobDescriptionOptions = [
        {
            icon: <BuildIcon />,
            item: 'Driftwood sidecorp'
        },
        {
            icon: <UserIcon />,
            item: '1 Position'
        },
        {
            icon: <DollarIcon />,
            item: '$CAD 100 - 140k'
        },
        {
            icon: <PinIcon />,
            item: 'Remote'
        },
        {
            icon: <SkillsIcon />,
            item: badgeList
        }
    ];

    return (
        <Styled.Header>
            <Styled.TitleContainer>
                <Styled.Title>
                    Principal Product Manager @Driftwood sidecorp
                    <Styled.Popover>
                        <JobDescription
                            type="icon"
                            icon={<ExclamationIcon />}
                            options={jobDescriptionOptions}
                        />
                    </Styled.Popover>
                </Styled.Title>
            </Styled.TitleContainer>
            <Styled.HeaderOptions>
                <Button size="lg" text="Edit job" />
                <Styled.FacePileContainer>
                    <FacePile numFaces={3} faces={mockFacepile} />
                </Styled.FacePileContainer>
            </Styled.HeaderOptions>
        </Styled.Header>
    );
};

export default header;
