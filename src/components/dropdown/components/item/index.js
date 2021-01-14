import React from 'react';

import * as Styled from './styles';

const Item = ({ icon, option, onClick = () => {} }) => {
    return (
        <Styled.Container onClick={onClick}>
            {!!icon && <Styled.Icon>{icon}</Styled.Icon>}
            {option}
        </Styled.Container>
    );
};

export default Item;
