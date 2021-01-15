import React from 'react';
import TableHead from '../tableHead';
import TableBody from '../tableBody';

import * as Styled from './styles';

const Table = ({ columns = [], data = [], children }) => {
    return (
        <Styled.Table>
            {!!columns && <TableHead columns={columns} />}
            {!!data && <TableBody listData={data} />}
        </Styled.Table>
    );
};

export default Table;
