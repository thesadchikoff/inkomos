// Описание типа для названия компаний
// Включает в себя мультиязычную версию названия компании
interface ICompanyName {
    ru: string
    en?: string
}

// Описание типа для ссылок навигации
interface INavLink {
    label: string
    url: string
}

// Описание типа для предоставляемого продукта
interface IProduct {
    productName: string
    productDescription: string
    currentPrice: string
    oldPrice?: string
    saleDescription?: string
}

// Описание типа для команды компании
interface ITeam {
    urlImage: string
    memberName: string
    position: string
    responsibilities: string[]
}

// Описание типа конфигурации сайта, включены все вышеперечисленные типы
// Это основной тип конфигурации, который экспортируется и используется в файле @/config/siteConfig.ts
export interface IConfig {
    siteName: string
    metaDescription: string
    companyName: ICompanyName
    navLinks: INavLink[]
    product: IProduct
    team: ITeam[]
}