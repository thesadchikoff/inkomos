import React from 'react';
import Header from "@/components/Header";

import Image from "next/image";

const WelcomeSection = () => {
    return (
        <div className={"bg-circle"}>
            <Header/>
            <div className={"w-full flex flex-col items-center justify-center relative gap-[40px]"}>
                <Image className={"absolute left-[360px] bottom-[275px]"} src={"/glass.png"} alt={"glass"} width={156}
                       height={156} unselectable={"on"}/>
                <Image className={"absolute left-0 -top-40 -z-20"} src={"/start-gradient.png"} alt={"glass"} width={617}
                       height={520} unselectable={"on"}/>
                <Image className={"absolute right-0 -z-[1] -top-40"} src={"/sphere.png"} alt={"glass"} width={619}
                       height={907} unselectable={"on"}/>
                <Image className={"absolute left-0 top-0"} src={"/ozon.svg"} width={140} height={140} alt={"ozon mark"}/>
                <Image className={"absolute left-0 -bottom-[100px]"} src={"/wb.svg"} width={296} height={296} alt={"ozon mark"}/>
                <Image className={"absolute right-[150px] z-[2] -top-10"} src={"/yandex.png"} width={290} height={290} alt={"ozon mark"}/>
                <Image className={"absolute left-10 bottom-[200px]"} src={"/sphere.svg"} width={110} height={110} alt={"ozon mark"}/>
                <div className={"w-full flex flex-col gap-[20px] items-center"}>
                    <h1 className="w-[1098px] z-[3] text-center text-white text-[85px] font-black leading-[110.50px]"><br/>Выстроим
                        электронную коммерцию за Вас</h1>
                    <div className="w-[793px] h-[103px] flex-col justify-start items-center gap-4 inline-flex">
                        <div
                            className="w-[793px] h-[103px] text-center text-slate-400 text-base font-normal leading-normal">Будущее,
                            которое стоит за Вами!
                            <br/>Мы готовы поделиться с Вами нашим опытом!
                            <br/>Сделаем из Вас успешных предпринимателей!
                        </div>
                    </div>
                </div>
                <div
                    className="w-[156px] h-14 pl-[17px] pr-4 bg-gradient-to-bl from-cyan-400 to-purple-600 rounded-[10px] cursor-pointer justify-center items-center inline-flex">
                    <div className="text-center text-white text-base font-semibold leading-none">Начать вместе</div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;