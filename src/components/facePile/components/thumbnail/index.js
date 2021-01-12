import React from 'react';

import Animals from '../animals';

import * as Styled from './styles';

const Thumbnail = ({ src = '', exceeded = 0, hiddenFaces = [], ...rest }) => {
    return (
        <Styled.Container {...rest}>
            <Styled.Thumbnail {...rest} src={src} exceeded={!!exceeded}>
                {!exceeded && !src && <Animals />}
                {!!exceeded && (
                    <Styled.ExceededText {...rest}>
                        +{exceeded}
                    </Styled.ExceededText>
                )}
            </Styled.Thumbnail>
        </Styled.Container>
    );
};

export default Thumbnail;
