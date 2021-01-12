import React, { useEffect, useState } from 'react';

import { ReactComponent as Cat } from '../../../../assets/svg/animals/cat.svg';
import { ReactComponent as Crow } from '../../../../assets/svg/animals/crow.svg';
import { ReactComponent as Dog } from '../../../../assets/svg/animals/dog.svg';
import { ReactComponent as Dove } from '../../../../assets/svg/animals/dove.svg';
import { ReactComponent as Fish } from '../../../../assets/svg/animals/fish.svg';
import { ReactComponent as Frog } from '../../../../assets/svg/animals/frog.svg';
import { ReactComponent as Hippo } from '../../../../assets/svg/animals/hippo.svg';
import { ReactComponent as Kiwi } from '../../../../assets/svg/animals/kiwi.svg';
import { ReactComponent as Otter } from '../../../../assets/svg/animals/otter.svg';
import { ReactComponent as Spider } from '../../../../assets/svg/animals/spider.svg';

const Animals = () => {
    const [animal, setAnimal] = useState('');
    const animalsList = [
        'cat',
        'crow',
        'dog',
        'dove',
        'fish',
        'frog',
        'hippo',
        'kiwi',
        'otter',
        'spider'
    ];

    useEffect(() => {
        const randomPosition = Math.floor(Math.random() * animalsList.length);
        setAnimal(animalsList[randomPosition]);
    }, []);

    const renderIcon = () => {
        switch (animal) {
            case 'cat':
                return <Cat />;
            case 'crow':
                return <Crow />;
            case 'dog':
                return <Dog />;
            case 'dove':
                return <Dove />;
            case 'fish':
                return <Fish />;
            case 'frog':
                return <Frog />;
            case 'hippo':
                return <Hippo />;
            case 'kiwi':
                return <Kiwi />;
            case 'otter':
                return <Otter />;
            case 'spider':
                return <Spider />;
            default:
                return <Kiwi />;
        }
    };

    return renderIcon();
};

export default Animals;
