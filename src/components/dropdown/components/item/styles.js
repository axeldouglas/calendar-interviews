import styled from 'styled-components';

export const Container = styled.li`
    padding: 12px 20px;
    color: #4f4f4f;
    white-space: nowrap;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    &:hover {
        background-color: #f8f9fa;
    }
    &:active,
    &:focus {
        color: #ffffff;
        background-color: #0d6efd;
    }
`;

export const Icon = styled.span`
    margin-right: 12px;
    svg {
        height: 14px;
    }
`;
