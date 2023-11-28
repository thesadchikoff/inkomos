// import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
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
            // Чтение содержимого шаблона из файла
            const templateFile = await readFile('pages/templates/email.hbs', 'utf-8');
            const template = handlebars.compile(templateFile);

            // Заполнение данными шаблона
            const emailData = {
                subject: "Уведомление с сайта Инкомос",
                subscriber: body.subscriber,
                text: body.text || 'Default email text',
            };
            const html = template(emailData);

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
                html,
            };

            // Отправка письма
            await transporter.sendMail(mailOptions);
            return new Response("Success")
        } catch (e: any) {
            return new Response(e)
        }
}