import posts from './blog/data';

export default function sitemap() {
  const baseUrl = 'https://visionsbyshefali.com';

  // Core pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/testimonials',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const services = [
    '/services/tarot',
    '/services/crystal-healing',
    '/services/psychic-healing',
    '/services/reiki-healing',
    '/services/sound-healing',
    '/services/past-life-regression',
    '/services/vastu',
    '/services/numerology',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Blog posts
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...services, ...blogPosts];
}
