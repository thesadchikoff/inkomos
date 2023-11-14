"use client"
import React, {useState} from 'react';
import {FaArrowRightLong} from "react-icons/fa6";

const EmailInput = () => {
    const [value, changeValue] = useState("")
    return (
        <div className="w-[304px] h-14 px-5 py-4 rounded-[10px] shadow-inner border border-[#933FFE] backdrop-blur-2xl justify-start items-center gap-2.5 inline-flex">
            <input type={"text"} value={value} onChange={(e) => changeValue(e.target.value)} placeholder={"Электронная почта"} className="bg-inherit grow shrink basis-0 text-slate-600 text-sm font-normal leading-[21px] outline-0 w-full text-white"/>
            <FaArrowRightLong className={"text-[#565976] cursor-pointer"} onClick={() => alert("Временно недоступно")}/>
        </div>
    );
};

export default EmailInput;