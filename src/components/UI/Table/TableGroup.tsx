import {IChildren} from "@/types/UITypes/types";

const TableGroup = ({children}: IChildren) => {
    return (
        <div className={"w-full flex items-center justify-between table-item py-[16px]"}>
            {children}
        </div>
    );
};

export default TableGroup;