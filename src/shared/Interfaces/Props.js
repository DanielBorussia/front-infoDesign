import { ReactNode } from "react";

export interface Props {
    children?: ReactNode
}

export interface ColumnsDataTable {
    field : string,
    headerName : string,
    width : number,
    editable?: boolean
}

export interface DataTableProps {
    rows: object[],
    columns: ColumnsDataTable[],
    loading : boolean
}