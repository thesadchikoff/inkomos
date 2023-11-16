"use client"
import React from 'react';
import Link from "next/link";
import config from "@/config/siteConfig";
import Logo from "@/components/UI/Logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";

interface IHeader {
    handle: () => any
}
const Header = ({handle}: IHeader) => {
    return (
        <header className={"container m-auto mobile:px-2 tablet:px-10 desktop:px-10 h-[80px] flex items-center justify-between z-[2000]"}>
            <Logo/>
            <nav className={"flex items-center gap-[60px] desktop:flex mobile:hidden"}>
                {
                    config.navLinks.map(link => <Link key={link.url} className={"z-[2000]"} href={link.url}>{link.label}</Link>)
                }
            </nav>
            <AiOutlineMenu onClick={handle} className={"desktop:hidden mobile:block text-3xl"}/>
        </header>
    );
};

export default Header;