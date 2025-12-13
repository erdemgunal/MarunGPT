export const siteConfig = {
    name: 'MarunGPT',
    description: 'AI-Powered Educational Platform',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ogImage: '/logos/marungpt-logo-trans.png',
    links: {
        twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
        github: process.env.NEXT_PUBLIC_GITHUB_URL || '',
    },
};