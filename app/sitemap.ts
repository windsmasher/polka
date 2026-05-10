import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.salonpolka.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-me`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
