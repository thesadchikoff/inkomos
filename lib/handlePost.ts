import {NextApiRequest, NextApiResponse} from "next";
import {readFile} from "fs/promises";
import handlebars from "handlebars";
import nodemailer from "nodemailer";

interface EmailData {
    to: string;
    subject: string;
    text?: string;
}

export async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    const { subject } = req.body as EmailData;

    try {
        // Чтение содержимого шаблона из файла
        const templateFile = await readFile('pages/templates/email.hbs', 'utf-8');
        const template = handlebars.compile(templateFile);

        // Заполнение данными шаблона
        const emailData = {
            subject,
            text: (req.body as EmailData).text || 'Default email text',
        };
        const html = template(emailData);

        // Настройка транспорта для отправки писем
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Опции для отправки письма
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_TO_EMAIL,
            subject,
            html,
        };

        // Отправка письма
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
}