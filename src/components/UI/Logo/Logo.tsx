import React from 'react';
import config from "@/config/siteConfig";

const Logo = () => {
    return (
        <div>
            <span className="text-green-400 text-[25px] font-bold">
                {config.companyName.ru?.slice(0,2)}
            </span>
            <span className="text-white text-[25px] font-bold">
                {config.companyName.ru?.slice(2)}
            </span>
        </div>
    );
};

export default Logo;