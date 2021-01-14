import React from 'react';

import * as Styled from './styles';

const Default = ({
    variant,
    size,
    text,
    children,
    linked,
    onClick = () => {}
}) => {
    return (
        <Styled.Container
            variant={variant}
            size={size}
            linked={linked}
            outline={variant.includes('outline')}
            onClick={onClick}
        >
            {!!text ? text : children}
        </Styled.Container>
    );
};

export default Default;
