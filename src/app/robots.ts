import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: ['/feedback/', '/policy/user-agreement', '/policy/confidentiality'],
        },
        sitemap: 'https://promo-inkomos.ru/sitemap.xml',
    }
}
