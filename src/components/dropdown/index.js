import React, { useEffect, useState, useRef } from 'react';
import Item from './components/item';

import * as Styled from './styles';

const Dropdown = ({
    type = '',
    variant = '',
    text = '',
    size = 'md',
    icon,
    direction = 'right',
    options = []
}) => {
    const refDropdown = useRef();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
        // eslint-disable-next-line
    }, []);

    const handleClick = (e) => {
        if (!refDropdown.current || refDropdown.current.contains(e.target)) {
            setExpanded(true);
            return;
        }
        setTimeout(() => {
            setExpanded(false);
        }, 100);
    };

    return (
        <Styled.Wrapper type={type} variant={variant}>
            <Styled.Toggle
                ref={refDropdown}
                type={type}
                variant={variant}
                size={size}
                aria-expanded={expanded}
            >
                {type === 'icon' ? icon : text}
            </Styled.Toggle>
            <Styled.Dropdown expanded={expanded} direction={direction}>
                {!!options.length &&
                    options.map((item, key) => (
                        <Item
                            key={`item_${key}`}
                            icon={item.icon}
                            option={item.item}
                            onClick={item.onClick}
                        />
                    ))}
            </Styled.Dropdown>
        </Styled.Wrapper>
    );
};

export default Dropdown;
