import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://btcd.finance'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // Add more pages as they're created
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/docs`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // }
  ]
} 