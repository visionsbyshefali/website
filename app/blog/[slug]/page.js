import posts from '../data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog – Visions By Shefali`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Shefali Soni'],
      siteName: 'Visions By Shefali',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section
        className="hero visible dark-hero"
        style={{
          minHeight: '60vh',
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%), url('/assets/images/about-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div className="container hero-content">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.7)' }}>Blog</Link>
            <span>›</span>
            <span style={{ color: '#fff' }}>{post.category}</span>
          </nav>

          <span
            style={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 600,
              color: 'var(--accent-color)',
              display: 'block',
              marginBottom: '18px',
            }}
          >
            {post.category}
          </span>
          <h1
            className="hero-title"
            style={{ maxWidth: '860px', margin: '0 auto 24px', fontSize: 'clamp(1.9rem, 5vw, 3.4rem)' }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '0.9rem',
            }}
          >
            <span>By Shefali Soni</span>
            <span>·</span>
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: '90px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <article
            className="blog-article"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author chip */}
          <div
            style={{
              marginTop: '70px',
              padding: '40px',
              background: 'var(--secondary-color)',
              borderRadius: '30px',
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                color: '#fff',
                fontFamily: 'var(--heading-font)',
                flexShrink: 0,
              }}
            >
              S
            </div>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--primary-color)', marginBottom: '6px' }}>
                Shefali Soni
              </p>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>
                Reiki Grandmaster, Certified Hypnosis Practitioner, and Intuitive Healer with 10+
                years of experience. Founder of Visions By Shefali.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '50px',
              padding: '50px',
              background: 'var(--primary-color)',
              borderRadius: '30px',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                color: '#fff',
                fontFamily: 'var(--heading-font)',
                fontSize: '1.8rem',
                marginBottom: '16px',
              }}
            >
              Ready to Experience Healing?
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.88)',
                marginBottom: '28px',
                lineHeight: 1.6,
              }}
            >
              Book a private, confidential session tailored to your unique needs.
            </p>
            <Link
              href="/contact"
              className="btn"
              style={{ background: '#fff', color: 'var(--primary-color)' }}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section style={{ padding: '90px 0', background: '#fafafa' }}>
          <div className="container">
            <h2
              className="section-title"
              style={{ marginBottom: '50px' }}
            >
              More Articles
            </h2>
            <div className="blog-grid blog-grid-3">
              {otherPosts.map((p) => (
                <article key={p.slug} className="blog-card">
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span
                        className="blog-category-badge"
                        style={{
                          background: 'var(--secondary-color)',
                          color: 'var(--primary-color)',
                        }}
                      >
                        {p.category}
                      </span>
                      <span className="blog-read-time">{p.readTime}</span>
                    </div>
                    <h3 className="blog-card-title" style={{ fontSize: '1.2rem' }}>
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p className="blog-card-excerpt" style={{ fontSize: '0.95rem' }}>
                      {p.excerpt.slice(0, 120)}…
                    </p>
                    <Link href={`/blog/${p.slug}`} className="blog-read-link">
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
