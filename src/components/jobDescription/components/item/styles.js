import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 347px;
    padding: 12px 0px;
    cursor: default;
`;

export const Icon = styled.div`
    margin-right: 14px;
    svg {
        height: 14px;
        path {
            fill: #3b4146;
        }
    }
`;
export const Content = styled.div`
    display: flex;

    flex-wrap: wrap;
    white-space: wrap;
    span {
        margin: 0 8px 8px 0;
        &:last-child {
            margin: 0;
        }
    }
`;
