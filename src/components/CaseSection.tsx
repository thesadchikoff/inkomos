import React from 'react';
import Image from "next/image";
import {FaArrowRightLong} from 'react-icons/fa6'
import config from "@/config/siteConfig";

const CaseSection = () => {
    return (
        <main id={"case-section"} className={"container m-auto flex mobile:flex-col desktop:flex-row mobile:px-2 tablet:px-10 desktop:px-10 z-50 pb-20"}>
            <div className={"bg-[#1A1B23] mobile:p-[20px] desktop:p-[60px] rounded-[25px] flex mobile:flex-col desktop:flex-row gap-[55px] justify-start z-50"}>
                    <div className={"z-50"}>
                        <Image src={'case.svg'} alt={'Кейс "Лидер"'} width={80} height={80}/>
                    </div>
                    <div className={"flex mobile:flex-col desktop:flex-row w-full gap-[54px] z-50"}>
                        <div className={"flex flex-col gap-[26px] z-50"}>
                            <h1 className={"text-white text-[32px] font-extrabold z-50"}>Кейс {config.product.productName}</h1>
                            <span className={"mobile:w-full desktop:w-[498px] text-slate-400 font-normal z-50"}>
                            {config.product.productDescription}
                        </span>
                        </div>
                        <div className={"w-full bg-zinc-900 rounded-[10px] border border-zinc-800 z-50 p-[20px] flex flex-col gap-[15px]"}>
                            <div className={"flex items-center gap-[30px]"}>
                                <h1 className={"text-[#9C4FFF] font-bold text-[18px]"}>{config.product.currentPrice}</h1>
                                <h2 className={"text-white text-opacity-40 line-through text-sm font-medium"}>{config.product.oldPrice}</h2>
                            </div>
                            <div className={"flex flex-col justify-between w-full h-full"}>
                                <span className={"text-slate-400 text-sm font-normal"}>
                                {config.product.saleDescription}
                            </span>
                                <button className={"flex items-center gap-[6px] text-purple-400 text-base font-semibold "}>
                                    Приобрести
                                    <FaArrowRightLong/>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    );
};

export default CaseSection;