"use client"
import React, {useState} from 'react';
import Header from "@/components/Header";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import config from "@/config/siteConfig";
import Link from "next/link";

const WelcomeSection = () => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => {
        console.log("click")
        if (showModal) {
            setShowModal(false)
            return document.body.style.overflow = "auto"
        } else {
            setShowModal(true)
            return document.body.style.overflow = "hidden"
        }
    }
    return (
        <div className={"bg-circle w-full"}>
            <Header handle={handleModal}/>
            {
                showModal && (
                    <div className={"absolute top-0 left-0 w-full h-full bg-[#0022D3] z-[2000]"}>
                       <IoClose onClick={handleModal} className={"absolute top-2 right-2 text-4xl"}/>
                        <div className={"p-20 flex flex-col gap-10 text-3xl font-bold"}>
                            {
                                config.navLinks.map(link => {
                                    return (
                                        <Link key={link.url} href={link.url} onClick={handleModal}>{link.label}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            <div className={"w-full mobile:px-2 tablet:px-10 desktop:px-10 flex flex-col items-center justify-center relative desktop:gap-[40px] mobile:gap-[50px]"}>
                <Image className={"absolute mobile:hidden desktop:block left-0 -top-40 -z-20"} src={"/start-gradient.png"} alt={"glass"} width={617}
                       height={520} unselectable={"on"}/>
                <Image className={"absolute right-0 -z-[1] desktop:-top-40 mobile:-top-[-150px]"} src={"/sphere.png"} alt={"glass"} width={619}
                       height={907} unselectable={"on"}/>
                <Image className={"absolute left-0 desktop:top-0 mobile:hidden desktop:block"} src={"/ozon.svg"} width={140} height={140} alt={"ozon mark"}/>
                <Image className={"absolute left-36 mobile:hidden desktop:block desktop:-bottom-[-20px]"} src={"/wb.svg"} width={296} height={296} alt={"ozon mark"}/>
                <Image className={"absolute right-[150px] z-[2] -top-10 mobile:hidden desktop:block"} src={"/yandex.png"} width={290} height={290} alt={"ozon mark"}/>
                <Image className={"absolute -z-10 left-10  desktop:bottom-[200px]"} src={"/sphere.svg"} width={110} height={110} alt={"ozon mark"}/>
                {/*intro*/}
                <div className={"w-full flex mobile:px-2 tablet:px-10 desktop:px-10 flex-col gap-[20px] items-center"}>
                        <span className="mobile:w-full desktop:w-[1098px] z-[3] text-center text-white desktop:text-[85px] mobile:text-[30px] font-black relative"><br/>Выстроим
                        <img className={"absolute mobile:left-[80px] mobile:bottom-[125px] desktop:left-[130px] desktop:bottom-[40px] mobile:w-[76px] mobile:hidden mobile:h-[76px] desktop:w-[156px] desktop:h-[156px]"} src={"/glass.png"} alt={"glass"} unselectable={"on"}/>
                         <br/>
                        электронную коммерцию за Вас</span>
                    <div className="mobile:px-2 tablet:px-10 desktop:px-10 container m-auto h-[103px] flex-col justify-start items-center gap-4 inline-flex">
                        <div
                            className="mobile:w-full desktop:w-[793px] h-[103px] text-center text-slate-400 text-base font-normal leading-normal">Будущее,
                            которое стоит за Вами!
                            <br/>Мы готовы поделиться с Вами нашим опытом!
                            <br/>Сделаем из Вас успешных предпринимателей!
                        </div>
                    </div>
                </div>
                {/*intro-end*/}
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