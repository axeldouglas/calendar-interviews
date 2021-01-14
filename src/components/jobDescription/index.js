import React, { useEffect, useState, useRef } from 'react';
import Item from './components/item';

import * as Styled from './styles';

const JobDescription = ({ variant = '', icon, options = [] }) => {
    const refPopover = useRef();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
        // eslint-disable-next-line
    }, []);

    const handleClick = (e) => {
        if (!refPopover.current || refPopover.current.contains(e.target)) {
            setExpanded(true);
            return;
        }
        setTimeout(() => {
            setExpanded(false);
        }, 100);
    };

    return (
        <Styled.Wrapper ref={refPopover} variant={variant}>
            <Styled.Toggle variant={variant}>{icon}</Styled.Toggle>
            <Styled.Body expanded={expanded}>
                {!!options.length &&
                    options.map((item, key) => (
                        <Item
                            key={`item_${key}`}
                            icon={item.icon}
                            option={item.item}
                        />
                    ))}
            </Styled.Body>
        </Styled.Wrapper>
    );
};

export default JobDescription;
