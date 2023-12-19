import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://promo-inkomos.ru/',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://promo-inkomos.ru/feedback',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://promo-inkomos.ru/policy/user-agreement',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://promo-inkomos.ru/policy/confidentiality',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}
