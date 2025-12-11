import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.familiada-online.pl'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/game/', '/api/'], // Blokujemy strony gry i API
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
