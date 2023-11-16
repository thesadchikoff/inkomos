import {IChildren} from "@/types/UITypes/types";

const TableGroup = ({children}: IChildren) => {
    return (
        <div className={"flex w-full items-center justify-between table-item py-[16px]"}>
            {children}
        </div>
    );
};

export default TableGroup;