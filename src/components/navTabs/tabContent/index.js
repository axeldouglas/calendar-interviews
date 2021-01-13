import React from 'react';

import * as Styled from './styles';

const TabContent = ({ tabKey = '', tabActive = '', children, ...rest }) => {
    const active = tabActive === tabKey;
    return (
        <Styled.Container
            id={`${tabKey}`}
            aria-labelledby={`${tabKey}-tab`}
            active={active}
            role="tabpanel"
        >
            {children}
        </Styled.Container>
    );
};

export default TabContent;
