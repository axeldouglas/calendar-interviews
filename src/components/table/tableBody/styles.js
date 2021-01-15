import styled from 'styled-components';

const getAlign = (align) => {
    switch (align) {
        case 'left':
            return 'justify-content: flex-start; display flex;';
        case 'right':
            return 'justify-content: flex-end; display flex;';
        default:
            return 'justify-content: center; display flex;';
    }
};
export const Wrapper = styled.div``;
export const GroupTitle = styled.h2`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #3b4146;
    margin: 23px 0 12px 0;
    padding: 0 50px;
`;
export const GroupRow = styled.div`
    display: flex;
    padding: 0 50px;
    ${({ highlight }) => highlight && ` background: #D5F2FB`}
`;
export const Row = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #646464;
    padding: 18px 0;

    flex: ${({ spanWidth }) => spanWidth || '1'};
    ${({ align }) => align && getAlign(align)};
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px`};
`;
