import React from 'react';

import * as Styled from './styles';

const Item = ({ icon, option }) => {
    return (
        <Styled.Container>
            {!!icon && <Styled.Icon>{icon}</Styled.Icon>}
            <Styled.Content>{option}</Styled.Content>
        </Styled.Container>
    );
};

export default Item;
