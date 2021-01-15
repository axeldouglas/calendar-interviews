import styled from 'styled-components';

const handleSize = (size) => {
    switch (size) {
        case 'lg':
            return `padding: .5rem 1rem; font-size: 1.25rem; border-radius: .3rem;`;
        case 'sm':
            return `padding: .25rem .5rem; font-size: .875rem; border-radius: .2rem;`;
        default:
            return `padding: .375rem .75rem; font-size: 1rem; border-radius: .25rem;`;
    }
};
export const Wrapper = styled.div`
    display: flex;
    position: relative;
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
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

    background-color: ${({ type }) =>
        type !== 'icon' ? `#5c636a` : `transparent`};

    ${({ type, size }) => type !== 'icon' && handleSize(size)};

    ${({ type }) =>
        type === 'icon' &&
        `
        svg {
            height: 14px; //1rem
            path {
                fill: #5c636a;
            }
        }
    `};

    &:focus {
        outline: 0;
        ${({ type }) =>
            type !== 'icon' &&
            `box-shadow: 0 0 0 0.15rem rgba(130, 138, 145, 0.5);`};
    }
    &::after {
        display: ${({ type }) => (type !== 'icon' ? `inline-block` : `none`)};
        margin-left: 0.4em;
        vertical-align: 0.2em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
    }
`;

export const Dropdown = styled.ul`
    display: ${({ expanded }) => (expanded ? `block` : `none`)};
    position: absolute;
    top: 0; // 100%
    z-index: 1000;
    min-width: 10rem;
    min-height: 0.5rem;
    padding: 10px 0;
    margin: 0; // 0.125rem 0 0
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    ${({ direction }) =>
        direction === 'right'
            ? `left: 0; right: auto;`
            : `left: auto; right: 0;`};
`;
