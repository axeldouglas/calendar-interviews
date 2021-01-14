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
        default:
            return '#6c757d';
    }
};
const handleTextColor = (color) => {
    switch (color) {
        case 'warning':
        case 'info':
        case 'light':
            return '#212529';
        default:
            return '#ffffff';
    }
};
const handleSize = (size) => {
    switch (size) {
        case 'lg':
            return `padding: 4px 14px; font-size: 14px; line-height: 17px;`;
        case 'sm':
            return `padding: 2px 12px; font-size: 13px; line-height: 16px;`;
        default:
            return `padding: 3px 13px; font-size: 13px; line-height: 17px;`;
    }
};

export const Container = styled.span`
    align-items: center;
    box-sizing: border-box;
    cursor: default;
    border-radius: 32px;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;

    color: ${({ outline, variant }) =>
        outline === true ? handleColor(variant) : handleTextColor(variant)};
    background: ${({ outline, variant }) =>
        outline === true ? `transparent` : handleColor(variant)};
    ${({ outline }) => outline && `border: 1px solid #e0e0e0;`};

    ${({ size }) => handleSize(size)};
`;

export default Container;
