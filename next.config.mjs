/** @type {import('next').NextConfig} */
const nextConfig = {
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
