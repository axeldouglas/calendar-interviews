import styled from 'styled-components';

const handleColor = (color) => {
    switch (color) {
        case 'primary':
            return '#0675ce';
        case 'danger':
            return '#dc3545';
        case 'success':
            return '#198754';
        case 'warning':
            return '#ffc107';
        case 'info':
            return '#0dcaf0';
        case 'light':
            return '#f8f9fa';
        case 'dark':
            return '#343a40';
        default:
            return '#6c757d';
    }
};
const handleColorHover = (color) => {
    switch (color) {
        case 'warning':
        case 'info':
        case 'light':
            return '#212529';
        default:
            return '#ffffff';
    }
};
const handleColorShadow = (color) => {
    switch (color) {
        case 'primary':
            return 'rgba(6, 117, 206, 0.5)';
        case 'success':
            return 'rgba(60,153,110,.5)';
        case 'danger':
            return 'rgba(225,83,97,.5)';
        case 'warning':
            return 'rgba(217,164,6,.5)';
        case 'info':
            return 'rgba(11,172,204,.5)';
        case 'light':
            return 'rgba(211,212,213,.5)';
        case 'dark':
            return 'rgba(66,70,73,.5)';
        default:
            return 'rgba(130,138,145,0.5)';
    }
};
const handleSize = (size) => {
    switch (size) {
        case 'lg':
            return `padding: 12px 27px; font-size: 13px; line-height: 16px;`;
        case 'sm':
            return `padding: 6px 14px; font-size: 12px; line-height: 15px;`;
        default:
            return `padding: 9px 21px; font-size: 12px; line-height: 15px;`;
    }
};

export const Container = styled.button`
    background: transparent;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    ${({ size }) => handleSize(size)};

    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ variant }) => handleColor(variant)};

    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
    font-style: normal;
    font-weight: normal;
    text-align: center;
    color: ${({ variant }) => handleColor(variant)};
    user-select: none;
    transition: box-shadow 0.15s ease-in-out;

    &:hover {
        background: ${({ variant }) => handleColor(variant)};
        color: ${({ variant }) => handleColorHover(variant)};
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.15rem ${({ variant }) => handleColorShadow(variant)};
    }
`;

export default Container;
