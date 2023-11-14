import {FaArrowRightLong} from "react-icons/fa6";
import TableItem from "@/components/UI/Table/TableItem";
import {ReactNode} from "react";
import TableGroup from "@/components/UI/Table/TableGroup";

interface ITable {
    children: ReactNode
}

const Table = ({children}: ITable) => {
    return (
        <div className={"bg-[#1A1B23] w-full px-[32px] py-[4px] rounded-[25px] flex flex-col"}>
            {children}
        </div>
    );
};


Table.Item = TableItem
Table.Group = TableGroup

export default Table;