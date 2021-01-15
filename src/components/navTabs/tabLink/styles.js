import styled from 'styled-components';

export const Link = styled.a`
    display: inline-block;
    margin-right: 35px;
    padding: 13px 0.5rem;
    text-decoration: none;
    transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;

    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;

    color: ${({ active }) => (active === true ? `#0675ce` : `#4F4F4F`)};
    ${({ active }) => active === true && `border-bottom: 2px solid #0675CE;`};
`;

export default Link;
