import React from 'react';
import Link from "next/link";
import config from "@/config/siteConfig";
import Logo from "@/components/UI/Logo/Logo";

const Header = () => {
    return (
        <header className={"container m-auto px-10 h-[80px] flex items-center justify-between z-[2000]"}>
            <Logo/>
            <nav className={"flex items-center gap-[60px]"}>
                {
                    config.navLinks.map(link => <Link key={link.url} className={"z-[2000]"} href={link.url}>{link.label}</Link>)
                }
            </nav>
        </header>
    );
};

export default Header;