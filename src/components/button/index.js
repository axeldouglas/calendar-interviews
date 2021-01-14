import React from 'react';
import Outline from './components/outline';

import * as Styled from './styles';

const Button = ({
    type = 'outline',
    variant = 'primary',
    text = '',
    size = 'md',
    onClick = () => {},
    ...rest
}) => {
    const renderButton = () => {
        // switch case when more then two types
        return (
            <Outline
                text={text}
                size={size}
                variant={variant}
                onClick={onClick}
                {...rest}
            />
        );
    };

    return <Styled.Wrapper>{renderButton()}</Styled.Wrapper>;
};

export default Button;
