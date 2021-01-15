import styled from 'styled-components';

export const Header = styled.div`
    max-width: 100%;
    position: relative;
    display: flex;
    background: #ffffff;
    padding: 24px 44px;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #4f4f4f;
    display: flex;
    flex: 1;
`;
export const Popover = styled.div`
    margin-left: 12px;
`;

export const HeaderOptions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const FacePileContainer = styled.div`
    margin-left: 25px;
`;
