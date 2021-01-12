import React from 'react';

import * as Styled from './styles';

const Outline = ({ variant, size, text, children, onClick = () => {} }) => {
    return (
        <Styled.Container variant={variant} size={size} onClick={onClick}>
            {!!text ? text : children}
        </Styled.Container>
    );
};

export default Outline;
