import React, {useState} from 'react';
import NameOrSubname from "@/components/UI/NameOrSubname";
import config from "@/config/siteConfig";
import {FaArrowRightLong} from "react-icons/fa6";
import Table from "@/components/UI/Table/Table";
import EmailInput from "@/components/UI/EmailInput/EmailInput";
import Link from "next/link";

const OurTeam = () => {
    return (
        <div id={"about-us-section"} className={"w-full flex-1 relative"}>
            <img className={"absolute right-0 top-40 -z-10"} src={"/bg-img.png"} alt={"bg-img"}/>
            <div className={"w-full flex flex-col justify-center gap-[24px]"}>
                <h1 className={"text-center text-white text-[50px] font-black"}>Встречайте наших опытных<br/>наставников
                </h1>
                <span className={"text-center text-slate-400 text-base font-normal"}>Вдохновляющие учителя, готовые помочь Вам пройти путь успешного обучения!</span>
            </div>
            <div className={"container m-auto w-full flex mobile:flex-col desktop:flex-row items-center mobile:px-2 tablet:px-10 desktop:px-10 gap-[100px] mt-[79px]"}>
                {
                    config.team.map(member => {
                        return (
                            <div key={member.urlImage}
                                 className={"w-full bg-zinc-900 rounded-[25px] w-1/2 mobile:z-40 p-[30px] flex flex-col gap-[25px]"}>
                                <div className={"flex gap-[31px]"}>
                                    <img
                                        className={`rounded-[20px] shadow-for-${member.urlImage.replace(/^\/(.*)(\.(jpg|png))$/, '$1')} bg-no-repeat bg-cover bg-center w-[144px] h-[203px]`}
                                        src={member.urlImage} alt={member.memberName}/>
                                    <div className={"flex flex-col gap-[12px]"}>
                                        <NameOrSubname isName>{member.memberName}</NameOrSubname>
                                        <NameOrSubname isName={false}>{member.position}</NameOrSubname>
                                    </div>
                                </div>
                                <div className={"flex flex-col gap-2"}>
                                    {
                                        member.responsibilities.map((responsibilitie: string) => <li
                                            key={responsibilitie}
                                            className={" text-slate-400 text-base font-normal"}>{responsibilitie}</li>)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
           <div className={"w-full h-full relative"}>
               <img className={"absolute -top-44 -z-20"} src={"/shield.png"} alt={"shield"}/>
           </div>
            <div className={"container my-20 mb-52 w-full h-screen m-auto flex items-center justify-end"}>
                <div className={"flex flex-col gap-[32px]"}>
                    <div className={"flex flex-col gap-[16px]"}>
                        <h1 className={"text-white mobile:text-[40px] desktop:text-[50px] font-black"}>Круглосуточный <br/> доступ к
                            полной <br/> службе поддержки</h1>
                        <span className={"desktop:text-slate-400 tablet:text-slate-200 text-base font-normal"}>На протяжении всего цикла мы будем поддерживать Вас и отвечать <br/> на возникшие вопросы</span>
                    </div>
                    <Link href={"/feedback"}
                        className={"p-[20px] border border-white rounded-[10px] w-max font-semibold hover:text-black hover:bg-white transition-all"}>
                        Начать с нами
                    </Link>
                </div>
            </div>
            <div id={"advantages-section"} className={"w-full relative bottom-[250px] flex mobile:px-2 tablet:px-10 desktop:px-10 flex-col tablet:items-center desktop:items-center gap-[30px]"}>
                <div className={"w-full flex flex-col items-center gap-[16px] mb-[25px]"}>
                    <h1 className={"text-white text-[50px] font-black"}>Рост прибыли в короткие сроки</h1>
                    <span className={"text-slate-400 text-base font-normal"}>Для многих важен результат и мы его гарантируем</span>
                </div>
                <Link href={"/feedback"} className={"flex items-center gap-[6px] text-purple-400 text-base font-semibold"}>Начать с
                    нами <FaArrowRightLong/></Link>
                <img className={"absolute left-0 -z-10 top-64"} src={"/bg-spiral-img.png"} alt={"spiral-bg"}/>
                <Table>
                    <Table.Group>
                        <Table.Item item={"Яндекс.Маркет"}/>
                        <Table.Item item={"Payments"} styles={"text-purple-400"}/>
                        <Table.Item item={"156,290.30₽"}/>
                        <Table.Item item={"+1.68%"} styles={"text-emerald-500"}/>
                        <Table.Item item={<img src="/small-graph.svg" alt="small"/>}/>
                        <Table.Item item={<Link href={"/feedback"}
                            className={"text-white text-base font-semibold flex items-center gap-[6px] justify-end"}>Подробнее <FaArrowRightLong/></Link>}/>
                    </Table.Group>
                    <Table.Group>
                        <Table.Item item={"OZON"}/>
                        <Table.Item item={"Payments"} styles={"text-purple-400"}/>
                        <Table.Item item={"94,284.81₽"}/>
                        <Table.Item item={"+4.36%"} styles={"text-emerald-500"}/>
                        <Table.Item item={<img src="/small-graph2.svg" alt="small"/>}/>
                        <Table.Item item={<Link href={"/feedback"}
                            className={"text-white text-base font-semibold flex items-center gap-[6px] justify-end"}>Подробнее <FaArrowRightLong/></Link>}/>
                    </Table.Group>
                    <Table.Group>
                        <Table.Item item={"Wildberries"}/>
                        <Table.Item item={"Payments"} styles={"text-purple-400"}/>
                        <Table.Item item={"71,342.88₽"}/>
                        <Table.Item item={"+3.43%"} styles={"text-emerald-500"}/>
                        <Table.Item item={<img src="/small-graph3.svg" alt="small"/>}/>
                        <Table.Item item={<Link href={"/feedback"}
                            className={"text-white text-base font-semibold flex items-center gap-[6px] w-[200px] justify-end"}>Подробнее <FaArrowRightLong/></Link>}/>
                    </Table.Group>
                </Table>
                <img className={"absolute right-0 -z-10 mobile:top-[300px] desktop:top-[500px]"} src={"/briefcase-img.png"} alt={"spiral-bg"}/>
            </div>
            <div className={"w-full mobile:px-2 tablet:px-10 desktop:px-10 pt-20"}>
                <div className={"container m-auto flex flex-col gap-[32px]"}>
                    <h1 className={"text-white mobile:text-[40px] desktop:text-[50px] font-black mobile:w-full desktop:w-[580px]"}>Поднять продажи проще, чем Вам
                        кажется</h1>
                    <span className={"text-slate-400 text-base font-normal"}>
                        Выгоднее и проще: как поднять продажи в E-Commerce с помощью проверенных стратегий
                    </span>
                    <Link href={"/feedback"}
                        className="w-[156px] h-14 pl-[17px] pr-4 bg-gradient-to-bl from-cyan-400 to-purple-600 rounded-[10px] cursor-pointer justify-center items-center inline-flex">
                        <div className="text-center text-white text-base font-semibold leading-none">Начать вместе</div>
                    </Link>
                </div>
            </div>
            <div id={"news-section"} className={"mobile:px-2 tablet:px-10 desktop:px-10 py-32 flex flex-col justify-center items-center gap-[52px]"}>
                <div className={"w-full flex flex-col gap-[16px] items-center"}>
                    <h1 className={"text-white text-center mobile:text-[40px] desktop:text-[50px] font-black"}>
                        Подписаться на новости
                    </h1>
                    <span className={"text-center text-slate-400 text-base font-normal"}>
                    Отказаться от подписки можно в любое время. <br/>
                    <article className={"text-white cursor-pointer hover:underline"}>
                        Политика конфиденциальности ↗
                    </article>
                </span>
                </div>
                <EmailInput/>
            </div>
        </div>
    );
};

export default OurTeam;