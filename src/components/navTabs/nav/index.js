import React, { useCallback, useEffect, useState } from 'react';

import * as Styled from './styles';

const Nav = ({ active = '', children }) => {
    const [tabActive, setTabActive] = useState('');

    useEffect(() => {
        !!active && setTabActive(active);
    }, [active]);

    const handleSelected = useCallback((value) => {
        setTabActive(value);
    }, []);

    const childrenWithProps = React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                tabActive,
                handleSelected
            });
        }
        return child;
    });

    return <Styled.Wrapper>{childrenWithProps}</Styled.Wrapper>;
};

export default Nav;
