import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function MyDataGrid({ data, columns, handleRowClick }) {
    return (
        <DataGrid rows={data} columns={columns} pageSize={5} onRowClick={handleRowClick} />
    );
}

export default MyDataGrid;
