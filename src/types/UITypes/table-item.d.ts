import {ReactNode} from "react";

interface ITableItem {
    id: string | number
    label: string
    title?: string
}

export type TableItem = {
    item: ReactNode | string | ITableItem | null | undefined;
    styles?: string
}