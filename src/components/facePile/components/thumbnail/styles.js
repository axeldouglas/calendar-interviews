import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    ${({ size }) =>
        size &&
        `
        margin-left: -7px; 
        height:${size}px;
    `};
`;
export const Thumbnail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #c4c4c4;
    color: #ffffff;

    cursor: default;
    box-sizing: border-box;
    border: 0.8px solid #ffffff;

    ${({ size }) =>
        size &&
        `
        border-radius: calc(${size}px / 2);
        width: ${size}px;
        height: ${size}px;
    `};

    ${({ src }) =>
        !!src.length &&
        `
        background-image: url('${src}');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    `}

    svg {
        ${({ size }) =>
            size &&
            `
            height: calc(${size}px / 2); 
            width: calc(${size}px / 2)
        `};
        path {
            fill: #6c757d;
        }
    }
`;
export const ExceededText = styled.span`
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #000000;
    ${({ size }) => size && `line-height: calc(${size}px / 2)`};
`;
