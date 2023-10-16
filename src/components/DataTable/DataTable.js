import { DataTableProps } from "../../shared/Interfaces/Props";
import { DataGridStyle } from "../../styles/DataGridStyle";
import { GridToolbar } from '@mui/x-data-grid';

const DataTable = ({ rows, columns, loading } : DataTableProps)  => {
    return (
        <DataGridStyle 
            rowHeight={30}
            rows={rows}
            columns={columns}
            loading={loading}
            disableColumnSelector
            disableDensitySelector
            initialState={{
            pagination: {
                paginationModel: {
                    page: 0, pageSize: 5 
                    },
                },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
                toolbar: {
                showQuickFilter: true,
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
        />
    );
}

export default DataTable;