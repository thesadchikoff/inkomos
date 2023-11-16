import React from 'react';
import Logo from "@/components/UI/Logo/Logo";
import EmailInput from "@/components/UI/EmailInput/EmailInput";
import config from "@/config/siteConfig";
import Link from "next/link";
import {FaVk, FaSquareWhatsapp, FaTelegram} from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className={"relative border-t  border-t-[#1A1B23]"}>
            <img className={"absolute left-0 bottom-0 -z-10"} src="/bg-gradient-footer.png" alt="gradient-for-footer"/>
            <div
                className={"container m-auto w-full h-[510px] px-10 py-[100px] relative flex justify-between"}>
                <div className={"flex flex-col"}>
                    <div className={"flex flex-col gap-[30px]"}>
                        <Logo/>
                        <span className={"opacity-30 text-white text-sm font-normal w-[380px]"}>
                    «Инкомос», доступные решения для роста в сфере электронной коммерции
                </span>
                        <span className={"opacity-30 text-white text-sm font-normal w-[380px]"}>
                    Подпишитесь на новостную рассылку, чтобы не пропустить важное.
                </span>
                        <EmailInput/>
                        <span className={"opacity-30 text-white text-xs font-normal"}>© 2023 «Инкомос», готовый бизнес на маркетплейсах</span>
                    </div>
                </div>
                <div className={"flex flex-col gap-[24px]"}>
                    <Link href={"#main"} className={"opacity-30 text-white text-sm font-semibold"}>Проект</Link>
                    {
                        config.navLinks.map(link => {
                            return (
                                <Link key={link.url} href={link.url}
                                      className={"opacity-30 text-white text-sm font-normal"}>{link.label}</Link>
                            )
                        })
                    }
                </div>
                <div className={"w-[280px] h-full flex flex-col gap-[24px] justify-between"}>
                    <div className={"flex flex-col gap-[24px]"}>
                        <h1 className={"opacity-30 text-white text-sm font-semibold"}>Политика конфиденциальности и
                            условия предоставления услуг</h1>
                        <Link href={"#"} className={"opacity-30 text-white text-sm font-normal"}>«Инкомос» политика
                            конфиденциальности</Link>
                        <Link href={"#"} className={"opacity-30 text-white text-sm font-normal"}>«Инкомос» условия
                            предоставления услуг</Link>
                        <div className={"flex items-center gap-2 text-xl text-gray-400"}>
                            <FaVk className={"cursor-pointer hover:text-white"}/>
                            <FaSquareWhatsapp className={"cursor-pointer hover:text-white"}/>
                            <FaTelegram className={"cursor-pointer hover:text-white"}/>
                        </div>
                    </div>
                    <div className={"text-xs font-normal flex items-center gap-1"}><span
                        className={"text-white opacity-30"}>Над сайтом трудился</span> <Link
                        className={"text-blue-600 font-semibold"} href={"https://sadchikoff.vercel.app/"}
                        target={"_blank"}>@n_sadchikoff</Link></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;