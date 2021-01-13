import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 0.5rem;
    display: ${({ active }) => (active === true ? `block` : `none`)};
`;

export default Container;
