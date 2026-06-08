import posts from './data';
import Link from 'next/link';

export const metadata = {
  title: 'Healing Insights & Guidance | Blog – Visions By Shefali',
  description:
    'Explore articles on tarot reading, crystal healing, reiki, numerology, past life regression, and more. Deep dives into the healing arts to support your journey.',
  keywords: [
    'healing blog',
    'tarot articles',
    'crystal healing guide',
    'reiki explained',
    'spiritual growth articles',
    'Visions By Shefali blog',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Healing Insights & Guidance | Blog – Visions By Shefali',
    description:
      'Articles on tarot, crystal healing, reiki, numerology, and more from Shefali Soni.',
    url: '/blog',
    type: 'website',
  },
};

const CATEGORY_COLORS = {
  Tarot: '#8e4a6f',
  'Crystal Healing': '#6b8e7f',
  Reiki: '#7b6fa0',
  'Past Life Regression': '#a07b4f',
  Numerology: '#4f7ba0',
  Guidance: '#a06b5a',
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main>
      {/* Hero */}
      <section
        className="hero visible dark-hero"
        style={{
          minHeight: '70vh',
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 100%), url('/assets/images/about-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div className="container hero-content">
          <span
            style={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 600,
              color: 'var(--accent-color)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Healing Insights
          </span>
          <h1 className="hero-title">Articles &amp; Guidance</h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.88)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Deep dives into the healing arts - tarot, energy work, numerology, and more - to
            support your journey of growth and self-discovery.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="blog-grid">
            {sorted.map((post) => {
              const color = CATEGORY_COLORS[post.category] || 'var(--primary-color)';
              const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              return (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span
                        className="blog-category-badge"
                        style={{ background: color + '18', color }}
                      >
                        {post.category}
                      </span>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                    <h2 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-date">{formattedDate}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-read-link"
                        style={{ color }}
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 0',
          background: 'var(--secondary-color)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span
            style={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 600,
              color: 'var(--primary-color)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Ready to Begin?
          </span>
          <h2
            className="section-title"
            style={{ marginBottom: '25px' }}
          >
            Take the First Step Toward Healing
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#555',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}
          >
            Reading about healing is a wonderful start. Experiencing it is transformative.
            Book a private, confidential session with Shefali today.
          </p>
          <Link href="/contact" className="btn">
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}
