import {TableItem} from "@/types/UITypes/table-item";
import {isValidElement} from "react";
const TableItem = ({item, styles}: TableItem) => {
    if (typeof item === 'string') {
        return (
            <span className={`text-xl font-bold ${styles} w-[200px]`}>{item}</span>
        );
    } else if (isValidElement(item)) {
        return (
            <span className={`text-xl font-bold ${styles} w-[200px]`}>{item}</span>

        );
    } else {
        return null;
    }
};

export default TableItem;