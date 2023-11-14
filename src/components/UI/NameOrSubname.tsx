import {ReactNode} from 'react';

interface IName {
    isName: boolean
    children: ReactNode
}

const NameOrSubname = ({children, isName}: IName) => {
    const Name = () => <h1 className={"text-white text-[25px] font-semibold"}>{children}</h1>
    const Subname = () => <span className={"text-slate-400 text-base font-normal"}>{children}</span>
    return (
        <>
            {
                isName ? <Name/> : <Subname/>
            }
        </>
    );
};

export default NameOrSubname;