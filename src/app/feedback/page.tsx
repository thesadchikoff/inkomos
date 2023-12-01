"use client"
import {FormEvent, useState} from 'react';
import Logo from "@/components/UI/Logo/Logo";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";

const Feedback = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [complete, setComplete] = useState(false)
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email && message) {
            setError(false)
            setIsLoading(true)
            axios.post("/api/feedback", {
                subject: "Уведомление от сайта Инкомос",
                subscriber: email,
                text: message
            }).then(res => console.log(res.data)).finally(() => {
                setIsLoading(false)
                setComplete(true)
            })
            setMessage("")
            setEmail("")
        } else {
            setError(true)
        }
    }
    return (
        <main className={"w-full h-full flex flex-col gap-10"}>
            <div className={"w-full h-[70px] border-b flex items-center border-b-zinc-700"}>
                <Link href={"/"} className={"flex flex-row items-center gap-2 mobile:p-2 tablet:p-5 desktop:p-10"}><Logo/> <span
                    className={"font-semibold text-lg"}> | обратная связь</span></Link>
            </div>
            <form onSubmit={submitForm}
                  className={"w-full h-full mobile:p-2 tablet:p-5 desktop:p-10 flex mobile:flex-col desktop:flex-row gap-10"}>
                <p className={"text-zinc-400 mobile:text-lg mobile:w-full desktop:w-1/2 desktop:text-2xl desktop:font-semibold"}>У
                    Вас остались вопросы или предложения? Тогда Вы можете отправить обращение нам и мы свяжемся с вами в
                    ближайшее время.</p>
                <div className={"mobile:w-full desktop:w-1/2 flex flex-col gap-5"}>
                    <input value={email} type={"email"} onChange={e => setEmail(e.target.value)} className={`${error ? "border-red-600" : "border-zinc-600"} px-5 w-full py-4 border rounded bg-transparent`}
                           placeholder={"Укажите Вашу почту"}/>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className={`resize-none px-5 w-full h-1/2 py-4 border rounded bg-transparent ${error ? "border-red-600" : "border-zinc-600"}`}
                              placeholder={"Введите Ваше обращение"}/>
                    { error && <span className={"text-red-600"}>Все поля должны быть заполнены</span> }
                    <button disabled={isLoading}
                        className="disabled:opacity-30 w-full mobile:h-20 desktop:h-14 pl-[17px] pr-4 bg-gradient-to-bl from-cyan-400 to-purple-600 rounded-[10px] cursor-pointer justify-center items-center inline-flex">
                        <div className="text-center text-white text-base leading-none flex items-center gap-5">
                            { isLoading && <AiOutlineLoading className={"text-2xl animate-spin"}/> }
                            Отправить
                        </div>
                    </button>
                    {
                        complete &&
                        <span className={"text-green-500 bg-green-300 bg-opacity-10 p-5 rounded-xl cursor-default select-none"}>Сообщение отправлено! Мы свяжемся с вами в ближайшее время</span>
                    }
                </div>

            </form>
        </main>
    );
};

export default Feedback;