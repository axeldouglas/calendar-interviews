import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #3b4146;
`;

export const Toggle = styled.button`
    display: inline-block;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
    color: #fff;

    background-color: transparent;

    svg {
        height: 14px; //1rem
        path {
            fill: #5c636a;
        }
    }

    &:focus {
        outline: 0;
    }
`;

export const Body = styled.div`
    display: ${({ expanded }) => (expanded ? `block` : `none`)};
    position: absolute;
    top: 0; // 100%
    left: 0;
    right: auto;
    z-index: 1000;
    min-width: 10rem;
    min-height: 0.5rem;
    padding: 18px 0 38px 33px;
    margin: 0; // 0.125rem 0 0
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
`;
