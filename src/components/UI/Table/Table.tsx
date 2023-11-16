import {FaArrowRightLong} from "react-icons/fa6";
import TableItem from "@/components/UI/Table/TableItem";
import {ReactNode} from "react";
import TableGroup from "@/components/UI/Table/TableGroup";

interface ITable {
    children: ReactNode
}

const Table = ({children}: ITable) => {
    return (
        <div className={"container m-auto bg-[#1A1B23] w-full mobile:px-[5px] desktop:px-[32px] py-[4px] rounded-[25px] mobile:hidden desktop:flex flex-col"}>
            {children}
        </div>
    );
};


Table.Item = TableItem
Table.Group = TableGroup

export default Table;