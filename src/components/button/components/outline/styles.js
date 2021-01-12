import styled from 'styled-components';

const handleColor = (color) => {
    switch (color) {
        case 'primary':
            return '#0675ce';
        case 'danger':
            return '#dc3545';
        case 'warning':
            return '#ffc107';
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
            return '#212529';
        case 'light':
            return '#212529';
        default:
            return '#ffffff';
    }
};
const handleSize = (size) => {
    switch (size) {
        case 'lg':
            return `padding: 12px; font-size: 13px; line-height: 16px;`;
        case 'sm':
            return `padding: 6px; font-size: 12px; line-height: 15px;`;
        default:
            return `padding: 9px; font-size: 12px; line-height: 15px;`;
    }
};

export const Container = styled.button`
    width: 100%;
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

    outline: none;

    &:hover {
        background: ${({ variant }) => handleColor(variant)};
        color: ${({ variant }) => handleColorHover(variant)};
    }
`;

export default Container;
