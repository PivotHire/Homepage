const BASE_URL = 'https://www.pivothire.tech/';

export default async function sitemap() {

    const staticPages = [
        {
            url: BASE_URL,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1.0,
        }
    ];

    return [
        ...staticPages,
    ];
}