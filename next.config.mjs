import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid picking a parent folder lockfile as the workspace root (local + CI).
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/testimonials.html', destination: '/testimonials', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
