import React, { useEffect, useState } from 'react';

import Thumbnail from './components';

import * as Styled from './styles';

const FacePile = ({ numFaces = 3, size = 30, faces = [] }) => {
    const [exceeded, setExceeded] = useState(0);
    const [showFaces, setShowFaces] = useState([]);
    const [hiddenFaces, setHiddenFaces] = useState([]);

    useEffect(() => {
        if (faces.length) {
            const exceededNum = faces.length - numFaces;
            setExceeded(exceededNum);

            if (exceededNum <= 0) {
                setShowFaces(faces);
            } else {
                const show = faces.splice(0, numFaces);
                setShowFaces(show);
                setHiddenFaces(faces);
            }
        }
    }, [faces, numFaces]);

    return (
        <Styled.Wrapper>
            {showFaces.length > 0 &&
                showFaces.map((item, key) => (
                    <Thumbnail
                        size={size}
                        src={!!item.avatar ? item.avatar : ''}
                        key={`face_${key}`}
                    />
                ))}

            {exceeded && (
                <Thumbnail
                    size={size}
                    exceeded={exceeded}
                    hiddenFaces={hiddenFaces}
                />
            )}
        </Styled.Wrapper>
    );
};

export default FacePile;
