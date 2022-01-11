/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ['default', 'de', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  images: {
    domains: ['directus.garamantis.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
