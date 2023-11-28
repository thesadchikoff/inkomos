// import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import {NextApiRequest, NextApiResponse} from "next";

interface EmailData {
    to: string;
    subject: string;
    subscriber: string;
    text?: string;
}

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === 'POST') {

//         } catch (error) {
//             console.error('Error sending email:', error);
//             res.status(500).json({ success: false, message: 'Failed to send email' });
//         }
//     } else {
//         res.status(405).json({ success: false, message: 'Method Not Allowed' });
//     }
// }
//
// export default handler


export async function POST(request: Request, response: NextApiResponse) {
    const body = await request.json()
    console.log(body);
    const { subject, subscriber } = request.body as unknown as EmailData;

        try {
            const emailData = {
                subject: "Уведомление с сайта Инкомос",
                subscriber: body.subscriber,
                text: body.text || 'Содержимое отсутствует',
            };

            // Настройка транспорта для отправки писем
            const transporter = nodemailer.createTransport({
                service: 'yandex',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            // Опции для отправки письма
            const mailOptions = {
                from: process.env.SMTP_USER,
                to: process.env.SMTP_FROM_EMAIL,
                subject: "Уведомление с сайта Инкомос",
                html: `
                <h1 style="font-size: 16px">${ emailData.subject }</h1>
<p>Поступило обращение от пользователя <span style="font-weight: bold; color: #4c2fb6">${ emailData.subscriber }</span></p>
<p><span style="font-weight: bold;">Содержимое обращения:</span> <br> ${ emailData.text }</p>
                `,
            };

            // Отправка письма
            await transporter.sendMail(mailOptions);
            return new Response("Success")
        } catch (e: any) {
            return new Response(e)
        }
}