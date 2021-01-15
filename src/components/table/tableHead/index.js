import React from 'react';

import * as Styled from './styles';

const TableHead = ({ columns = [] }) => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                {!!columns &&
                    columns.map((item, key) => (
                        <Styled.Title
                            key={`title_${key}`}
                            spanWidth={item.spanWidth}
                        >
                            {item.title}
                        </Styled.Title>
                    ))}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default TableHead;
