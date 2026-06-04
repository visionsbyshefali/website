import Link from 'next/link';

export default function Footer() {
  const instagramUrl = 'https://www.instagram.com/visionsbyshefali?igsh=MWJxcHZjMjFkeDhraA==';
  const whatsappUrl = 'https://wa.me/919584657937';

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo footer-logo">
              VisionsByShefali
            </Link>
            <p className="footer-text">
              Empowering your journey of healing and growth through intuitive guidance. A safe space to heal, grow, and thrive.
            </p>
            <div className="footer-socials">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95h-8.5Zm8.93 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
                  />
                </svg>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.52 3.49A11.88 11.88 0 0 0 12.06 0C5.49 0 .13 5.36.13 11.93c0 2.1.55 4.16 1.6 5.99L0 24l6.23-1.63a11.9 11.9 0 0 0 5.83 1.49h.01c6.57 0 11.93-5.36 11.93-11.93a11.84 11.84 0 0 0-3.48-8.44ZM12.07 21.8a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.7.97.99-3.6-.24-.37a9.8 9.8 0 0 1-1.5-5.2c0-5.42 4.41-9.83 9.83-9.83a9.76 9.76 0 0 1 6.95 2.88 9.76 9.76 0 0 1 2.88 6.95c0 5.42-4.41 9.83-9.82 9.83Zm5.39-7.34c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.07-.12-.27-.2-.57-.35Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Shefali</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/tarot">Tarot Reading</Link></li>
              <li><Link href="/services/crystal-healing">Crystal Healing</Link></li>
              <li><Link href="/services/psychic-healing">Psychic Healing</Link></li>
              <li><Link href="/services/reiki-healing">Reiki Healing</Link></li>
              <li><Link href="/services/sound-healing">Sound Healing</Link></li>
              <li><Link href="/services/past-life-regression">Past Life Regression</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Connect</h4>
            <p className="footer-text">bookings@visionsbyshefali.com</p>
            <p className="footer-text">Available Globally (Online Sessions)</p>
            <Link href="/contact" className="btn footer-btn">Book Session</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 VisionsByShefali. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
