import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
`;

export const Container = styled.div`
    display: flex;
    padding: 0 40px;
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
    padding: 14px 0;
    flex: ${({ spanWidth }) => spanWidth || '1'};
`;
