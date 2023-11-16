import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://incomos.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}