// Основной файл конфигурации сайта

import {formatCurrency} from "@/utils/formatCurrency";
import {IConfig} from "@/types/configTypes";

// Инициализация объекта конфигурации
// Все поля описаны в файле @/types/configTypes.ts
const config: IConfig = {
    siteName: "Инкомос — готовый бизнес на маркетплейсах",
    metaDescription: "Выстроим электронную коммерцию за Вас",
    companyName: {
        ru: "инкомос",
        en: "incomos"
    },
    navLinks: [
        {
            label: "Кейс",
            url: "#case-section",
        },
        {
            label: "О нас",
            url: "#about-us-section"
        },
        {
            label: "Преимущества",
            url: "#advantages-section"
        },
        {
            label: "Новости",
            url: "#news-section"
        }
    ],
    product: {
        productName: '"Лидер"',
        productDescription: "Кейс включает в себя полный спектр услуг, начиная с регистрации ИП и до самых мельчайших тонкостей  работы с маркеплейсами, в качестве бонуса мы обучим работе с 1С. С вами мы будем на связи 24/7.Пройдем этот путь вместе.\n" +
            "Мы готовы рассказать и показать, что стать успешным может каждый! Свяжитесь с нами прямо сейчас или оставьте заявку! Начните свой путь к лидерству! ",
        currentPrice: formatCurrency(500000),
        saleDescription: "Успей преобрести кейс по грандиозной скидке!",
        oldPrice: formatCurrency(1000000),
    },
    team: [
        {
            urlImage: '/evgeniy.jpg',
            memberName: "Евгений",
            position: "Наставник",
            responsibilities: [
                "Основатель проекта",
                "Основатель компании «Инкомос»",
                "С 2021 года селлер на Я.Маркет, Wildberries, Ozon с годовым оборотом 100 млн. руб."
            ]
        },
        {
            urlImage: '/natalia.png',
            memberName: "Наталья",
            position: "Куратор",
            responsibilities: [
                "Действующий предпрениматель",
                "Бизнес-партнер компании «Инкомос»",
                "Селлер на Я.Маркет, Wildberries, Ozon с 2022 года"
            ]
        }
    ]
}

// Разрешаем экспорт переменной как config
export default config;