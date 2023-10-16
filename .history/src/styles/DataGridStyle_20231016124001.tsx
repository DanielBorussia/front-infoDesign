import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const DataGridStyle = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
      'rgba(53, 53, 53, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: '#fafafa' ,
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: `1px solid ${
         '#f0f0f0' 
      }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
       '#f0f0f0'
      }`,
    },
    '& .MuiDataGrid-cell': {
      color:
         'rgba(0,0,0,.85)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },

}));