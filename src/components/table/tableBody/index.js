import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Button from '../../button';
import Dropdown from '../../dropdown';
import Badge from '../../badge';

import { ReactComponent as ElipsisIcon } from '../../../assets/svg/v-elipsis.svg';

import * as Styled from './styles';

const TableBody = ({ listData = [] }) => {
    const [waitingList, setWaitingList] = useState([]);
    const [upcomingList, setUpcomingList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    useEffect(() => {
        if (!!listData) {
            const waiting = listData.filter(
                (item) => item.status !== 'Scheduled'
            );
            const upcoming = listData.filter(
                (item) =>
                    item.status === 'Scheduled' &&
                    moment(item.scheduledTime).isAfter()
            );
            const done = listData.filter(
                (item) =>
                    item.status === 'Scheduled' &&
                    moment(item.scheduledTime).isBefore()
            );
            setWaitingList(waiting);
            setUpcomingList(upcoming);
            setDoneList(done);
        }
        // eslint-disable-next-line
    }, []);

    const renderButton = (type, id) => {
        switch (type) {
            case 'upcoming':
                return (
                    <Button
                        size="sm"
                        text="Get interview link"
                        onClick={() => {}}
                    />
                );
            case 'done':
                return (
                    <Button
                        size="sm"
                        text="Move to the next step"
                        onClick={() => {}}
                    />
                );
            default:
                return '';
        }
    };

    const getMenuOptions = (type) => {
        const options = [
            {
                item: 'Cancel request',
                onClick: () => {}
            },
            {
                item: 'Set as Interview done',
                onClick: () => {}
            },
            {
                item: 'View calendar',
                onClick: () => {}
            },
            {
                item: 'Report a problem',
                onClick: () => {}
            }
        ];

        const typeOption = [
            {
                item:
                    type === 'waiting'
                        ? 'Send the request again'
                        : 'Re-schedule',
                onClick: () => {}
            }
        ];
        return [...typeOption, ...options];
    };

    const renderBody = (data, key, type) => {
        return (
            <Styled.GroupRow key={`row_${key}`} highlight={type === 'upcoming'}>
                <Styled.Row spanWidth={3}>{data.name}</Styled.Row>
                <Styled.Row spanWidth={2}>{data.interviewStep}</Styled.Row>
                <Styled.Row spanWidth={3}>
                    {data.status === 'Scheduled' ? (
                        moment(data.scheduledTime).format(
                            'ddd, MMM, Do ⋅ hh:00a'
                        )
                    ) : (
                        <Badge
                            size="sm"
                            text={data.status}
                            type="pill"
                            variant="warning-outline"
                        />
                    )}
                </Styled.Row>
                <Styled.Row>{renderButton(type, data.id)}</Styled.Row>
                <Styled.Row></Styled.Row>
                <Styled.Row align="right">
                    <Dropdown
                        type="icon"
                        icon={<ElipsisIcon />}
                        options={getMenuOptions(type)}
                    />
                </Styled.Row>
            </Styled.GroupRow>
        );
    };

    return (
        <Styled.Wrapper>
            <Styled.GroupTitle>Waiting confirmation</Styled.GroupTitle>
            {!!waitingList &&
                waitingList.map((item, key) =>
                    renderBody(item, key, 'waiting')
                )}

            <Styled.GroupTitle>Upcoming</Styled.GroupTitle>
            {!!upcomingList &&
                upcomingList.map((item, key) =>
                    renderBody(item, key, 'upcoming')
                )}

            <Styled.GroupTitle>Done</Styled.GroupTitle>
            {!!doneList &&
                doneList.map((item, key) => renderBody(item, key, 'done'))}
        </Styled.Wrapper>
    );
};

export default TableBody;
