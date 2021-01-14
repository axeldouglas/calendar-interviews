import React from 'react';
import { Default, Pill } from './components';

const Badge = ({
    type = 'default',
    variant = '',
    text = '',
    size = 'md',
    linked = false,
    onClick = () => {}
}) => {
    const renderBadge = () => {
        switch (type) {
            case 'pill':
                return (
                    <Pill
                        text={text}
                        size={size}
                        variant={variant}
                        linked={linked}
                        onClick={onClick}
                    />
                );
            default:
                return (
                    <Default
                        text={text}
                        size={size}
                        variant={variant}
                        linked={linked}
                        onClick={onClick}
                    />
                );
        }
    };
    return <>{renderBadge()}</>;
};

export default Badge;
