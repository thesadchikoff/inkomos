import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://incomos.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://incomos.vercel.app/feedback',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://incomos.vercel.app/policy/user-agreement',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://incomos.vercel.app/policy/confidentiality',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}