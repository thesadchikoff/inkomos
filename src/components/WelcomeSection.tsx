import React from 'react';
import Header from "@/components/Header";

import Image from "next/image";

const WelcomeSection = () => {
    return (
        <div className={"bg-circle"}>
            <Header/>
            <div className={"w-full desktop:px-0 mobile:px-2 flex flex-col items-center justify-center relative desktop:gap-[40px] mobile:gap-[20px]"}>
                <Image className={"absolute left-0 -top-40 -z-20"} src={"/start-gradient.png"} alt={"glass"} width={617}
                       height={520} unselectable={"on"}/>
                <Image className={"absolute right-0 -z-[1] desktop:-top-40 mobile:-top-[-150px]"} src={"/sphere.png"} alt={"glass"} width={619}
                       height={907} unselectable={"on"}/>
                <Image className={"absolute left-0 desktop:top-0 mobile:hidden desktop:block"} src={"/ozon.svg"} width={140} height={140} alt={"ozon mark"}/>
                <Image className={"absolute left-0 mobile:hidden desktop:block desktop:-bottom-[100px]"} src={"/wb.svg"} width={296} height={296} alt={"ozon mark"}/>
                <Image className={"absolute right-[150px] z-[2] -top-10 mobile:hidden desktop:block"} src={"/yandex.png"} width={290} height={290} alt={"ozon mark"}/>
                <Image className={"absolute left-10  desktop:bottom-[200px]"} src={"/sphere.svg"} width={110} height={110} alt={"ozon mark"}/>
                <div className={"w-full flex flex-col gap-[20px] items-center"}>
                    <h1 className="desktop:w-[1098px] mobile:w-[250px] z-[3] text-center text-white desktop:text-[85px] mobile:text-[35px] font-black desktop:leading-[110.50px] relative"><br/>Выстроим
                        <img className={"absolute mobile:left-[80px] mobile:bottom-[125px] desktop:left-[130px] desktop:bottom-[40px] mobile:w-[76px] mobile:h-[76px] desktop:w-[156px] desktop:h-[156px]"} src={"/glass.png"} alt={"glass"} unselectable={"on"}/>
                        электронную коммерцию за Вас</h1>
                    <div className="mobile:px-2 tablet:px-10 desktop:px-10 container m-auto h-[103px] flex-col justify-start items-center gap-4 inline-flex">
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

            <span className={"desktop:hidden mobile:block text-center mobile:px-2 tablet:px-10 desktop:px-10 container m-auto pt-5 font-bold text-2xl"}>
                Мы работаем со следующими площадками
            </span>
            <div className={"justify-between mobile:px-2 tablet:px-10 desktop:px-10 mobile:flex desktop:hidden container m-auto items-center justify-center"}>
                <img className={" bg-cover bg-center"} src={"/icon_square.svg"} alt={"ozon mark"}/>
                <img className={" bg-cover bg-center"} src={"/wildberries.png"} alt={"ozon mark"}/>
                <img className={" bg-cover bg-center"} src={"/ym.png"} alt={"ozon mark"}/>
            </div>
        </div>
    );
};

export default WelcomeSection;