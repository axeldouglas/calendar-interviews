import React from 'react';

import * as Styled from './styles';

const TabLink = ({
    title = '',
    tabKey = '',
    tabActive = '',
    children,
    handleSelected = () => {}
}) => {
    const active = tabActive === tabKey;
    return (
        <Styled.Link
            href={`#${tabKey}`}
            id={`${tabKey}-tab`}
            aria-controls={tabKey}
            active={active}
            aria-selected={active}
            role="tab"
            onClick={() => handleSelected(tabKey)}
        >
            {!!title ? title : children}
        </Styled.Link>
    );
};

export default TabLink;
