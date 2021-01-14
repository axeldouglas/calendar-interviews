import styled from 'styled-components';

const handleColor = (color) => {
    switch (color) {
        case 'primary':
        case 'primary-outline':
            return '#0675ce';
        case 'danger':
        case 'danger-outline':
            return '#dc3545';
        case 'success':
        case 'success-outline':
            return '#198754';
        case 'warning':
        case 'warning-outline':
            return '#FCAB10';
        case 'info':
        case 'info-outline':
            return '#0dcaf0';
        case 'light':
        case 'light-outline':
            return '#f8f9fa';
        case 'dark':
        case 'dark-outline':
            return '#343a40';
        case 'secondary':
        case 'secondary-outline':
            return '#6c757d';
        default:
            return '#F2F2F2';
    }
};
const handleTextColor = (color) => {
    switch (color) {
        case 'warning':
        case 'info':
        case 'light':
            return '#212529';
        case 'prymary':
        case 'secondary':
        case 'danger':
        case 'success':
        case 'dark':
            return '#ffffff';
        default:
            return '#454D53';
    }
};
const handleSize = (size) => {
    switch (size) {
        case 'lg':
            return `padding: 4px 8px; font-size: 16px; line-height: 24px;`;
        case 'sm':
            return `padding: 2px 4px; font-size: 13px; line-height: 18px;`;
        default:
            return `padding: 3px 6px; font-size: 14px; line-height: 21px;`;
    }
};

export const Container = styled.span`
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    cursor: default;
    border-radius: 3px;

    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
    font-style: normal;
    font-weight: normal;
    text-align: center;

    color: ${({ outline, variant }) =>
        outline === true ? handleColor(variant) : handleTextColor(variant)};
    background: ${({ outline, variant }) =>
        outline === true ? `transparent` : handleColor(variant)};
    ${({ outline }) => outline && `border: 1px solid #e0e0e0;`};

    ${({ size }) => handleSize(size)};
`;

export default Container;
