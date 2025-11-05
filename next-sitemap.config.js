/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://avniproject.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/case-studies/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/events/')) {
      priority = 0.6;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
