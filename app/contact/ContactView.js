'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  getCountries,
  getCountryCallingCode,
  formatIncompletePhoneNumber,
  parseIncompletePhoneNumber,
  validatePhoneNumberLength,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import styles from './contact.module.css';

const EMAILJS_SERVICE_ID = 'service_k1by34n';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_f7b29qu';
const EMAILJS_USER_ID = 'jFkPRjeSxAVQzGKuw';
const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

/** Display number in “How to reach us” — set NEXT_PUBLIC_CONTACT_PHONE in .env.local */
const DEFAULT_BUSINESS_PHONE = '+91 95846 57937';
const INSTAGRAM_URL = 'https://www.instagram.com/visionsbyshefali?igsh=MWJxcHZjMjFkeDhraA==';
const WHATSAPP_URL = 'https://wa.me/919584657937';

const SERVICE_OPTIONS = [
  'Tarot Reading',
  'Crystal Healing',
  'Psychic Healing',
  'Past Life Regression',
  'Other / Not Sure',
];

function buildCountryOptions() {
  return getCountries()
    .map((code) => {
      let dial;
      try {
        dial = getCountryCallingCode(code);
      } catch {
        return null;
      }
      // Keep labels deterministic across server/client to prevent hydration mismatches.
      return { code, dial, label: `${code} (+${dial})` };
    })
    .filter(Boolean)
    .sort((a, b) => a.label.localeCompare(b.label, 'en'));
}

export default function ContactView() {
  const userId = EMAILJS_USER_ID;

  const countryOptions = useMemo(() => buildCountryOptions(), []);
  const [country, setCountry] = useState('IN');
  const [nationalInput, setNationalInput] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formNotice, setFormNotice] = useState({ type: 'idle', text: '' });

  const businessPhone =
    typeof process !== 'undefined' && process.env.NEXT_PUBLIC_CONTACT_PHONE
      ? process.env.NEXT_PUBLIC_CONTACT_PHONE
      : DEFAULT_BUSINESS_PHONE;

  const digits = useMemo(
    () => parseIncompletePhoneNumber(nationalInput),
    [nationalInput]
  );

  const formattedNational = useMemo(
    () => formatIncompletePhoneNumber(digits, country),
    [digits, country]
  );

  const lengthStatus = useMemo(() => {
    if (!digits) return undefined;
    return validatePhoneNumberLength(digits, country);
  }, [digits, country]);

  const phoneValid = useMemo(() => {
    if (!digits) return false;
    return isValidPhoneNumber(digits, country);
  }, [digits, country]);

  const phoneError = phoneTouched && Boolean(digits) && !phoneValid;

  const phoneForEmail = useMemo(() => {
    if (!digits) return '';
    const parsed = parsePhoneNumberFromString(digits, country);
    if (parsed?.isValid()) return parsed.formatInternational();
    return `+${getCountryCallingCode(country)} ${digits}`;
  }, [digits, country]);

  const onNationalChange = useCallback(
    (e) => {
      const raw = e.target.value;
      let nextDigits = parseIncompletePhoneNumber(raw);
      while (nextDigits.length > 0 && validatePhoneNumberLength(nextDigits, country) === 'TOO_LONG') {
        nextDigits = nextDigits.slice(0, -1);
      }
      setNationalInput(formatIncompletePhoneNumber(nextDigits, country));
    },
    [country]
  );

  const onCountryChange = useCallback((e) => {
    const next = e.target.value;
    setCountry(next);
    setNationalInput((prev) => {
      const d = parseIncompletePhoneNumber(prev);
      return d ? formatIncompletePhoneNumber(d, next) : '';
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setFormNotice({ type: 'idle', text: '' });

      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedMessage = message.trim();

      if (!trimmedName || !trimmedEmail || !trimmedMessage) {
        setFormNotice({ type: 'error', text: 'Please fill in your name, email, and message.' });
        return;
      }

      setPhoneTouched(true);
      if (!phoneValid || !digits) {
        setFormNotice({ type: 'error', text: 'Please enter a valid mobile number with country code.' });
        return;
      }

      if (!userId) {
        setFormNotice({
          type: 'error',
          text: 'Email is not configured yet. Add NEXT_PUBLIC_EMAILJS_USER_ID to your environment.',
        });
        return;
      }

      const templateParams = {
        name: trimmedName,
        from_name: trimmedName,
        email: trimmedEmail,
        user_email: trimmedEmail,
        reply_to: trimmedEmail,
        service,
        message: trimmedMessage,
        phone: phoneForEmail,
      };

      setSubmitting(true);
      try {
        const response = await fetch(EMAILJS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lib_version: '4.4.1',
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: userId,
            template_params: templateParams,
          }),
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || `EmailJS request failed with status ${response.status}`);
        }

        setFormNotice({
          type: 'success',
          text: 'Thank you — your inquiry was sent. We will get back to you soon.',
        });
        setName('');
        setEmail('');
        setService(SERVICE_OPTIONS[0]);
        setMessage('');
        setNationalInput('');
        setPhoneTouched(false);
      } catch (err) {
        const msg =
          err && typeof err === 'object' && 'text' in err
            ? String(err.text)
            : err instanceof Error
              ? err.message
              : 'Something went wrong. Please try again or email us directly.';
        setFormNotice({ type: 'error', text: msg });
      } finally {
        setSubmitting(false);
      }
    },
    [name, email, message, service, phoneValid, digits, phoneForEmail, userId]
  );

  return (
    <main>
      <section className={`${styles.sectionHero} visible`}>
        <div className="container hero-content">
          <span className={styles.tag}>Connect</span>
          <h1 className={styles.heroTitle}>Book Your Session</h1>
          <p className={styles.heroLead}>
            Begin your journey toward healing and clarity. Reach out for a private, confidential session
            tailored to your needs.
          </p>
        </div>

        <div
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
          role="button"
          tabIndex={0}
        >
          <span>Explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      <section className={`${styles.sectionContent} visible`}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ marginBottom: '30px' }}>How to Reach Us</h2>
              <div style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.8, marginBottom: '50px' }}>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Email</h4>
                  <p>bookings@visionsbyshefali.com</p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Phone / WhatsApp</h4>
                  <p>
                    <a href={`tel:${businessPhone.replace(/\s/g, '')}`} style={{ color: 'inherit' }}>
                      {businessPhone}
                    </a>
                  </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Availability</h4>
                  <p>Online Sessions globally. Flexible timing for different time zones.</p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Confidentiality</h4>
                  <p>All communications and sessions are strictly private.</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Open Instagram profile"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95h-8.5Zm8.93 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
                    />
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Open WhatsApp chat"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M20.52 3.49A11.88 11.88 0 0 0 12.06 0C5.49 0 .13 5.36.13 11.93c0 2.1.55 4.16 1.6 5.99L0 24l6.23-1.63a11.9 11.9 0 0 0 5.83 1.49h.01c6.57 0 11.93-5.36 11.93-11.93a11.84 11.84 0 0 0-3.48-8.44ZM12.07 21.8a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.7.97.99-3.6-.24-.37a9.8 9.8 0 0 1-1.5-5.2c0-5.42 4.41-9.83 9.83-9.83a9.76 9.76 0 0 1 6.95 2.88 9.76 9.76 0 0 1 2.88 6.95c0 5.42-4.41 9.83-9.82 9.83Zm5.39-7.34c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.07-.12-.27-.2-.57-.35Z"
                    />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className={styles.formCard}>
              <h3>Inquiry Form</h3>
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="inq-name">
                    Full Name
                  </label>
                  <input
                    id="inq-name"
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    className={styles.input}
                    autoComplete="name"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="inq-email">
                    Email Address
                  </label>
                  <input
                    id="inq-email"
                    name="user_email"
                    type="email"
                    placeholder="email@example.com"
                    className={styles.input}
                    autoComplete="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="inq-phone">
                    Mobile number
                  </label>
                  <div className={styles.phoneRow}>
                    <div className={styles.countryWrap}>
                      <select
                        id="inq-country"
                        name="phone_country"
                        className={styles.countrySelect}
                        value={country}
                        onChange={onCountryChange}
                        aria-label="Country calling code"
                      >
                        {countryOptions.map(({ code, label }) => (
                          <option key={code} value={code}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.nationalWrap}>
                      <input
                        id="inq-phone"
                        name="phone_national"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        placeholder="National number"
                        className={styles.input}
                        value={formattedNational}
                        onChange={onNationalChange}
                        onBlur={() => setPhoneTouched(true)}
                        aria-invalid={phoneError || undefined}
                        aria-describedby="inq-phone-hint"
                        required
                      />
                    </div>
                  </div>
                  <p id="inq-phone-hint" className={styles.fieldHint}>
                    Country codes and number lengths follow{' '}
                    <a href="https://github.com/google/libphonenumber" target="_blank" rel="noopener noreferrer">
                      Google libphonenumber
                    </a>{' '}
                    (via libphonenumber-js). Selected: +{getCountryCallingCode(country)}.
                  </p>
                  {phoneError && (
                    <p className={styles.fieldError} role="alert">
                      {lengthStatus === 'TOO_SHORT'
                        ? 'This number looks too short for the selected country.'
                        : lengthStatus === 'TOO_LONG'
                          ? 'Too many digits for the selected country.'
                          : 'Please enter a valid phone number for this country.'}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="inq-service">
                    Service of Interest
                  </label>
                  <select
                    id="inq-service"
                    name="service"
                    className={styles.select}
                    value={service}
                    onChange={(ev) => setService(ev.target.value)}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.fieldMessage}>
                  <label className={styles.label} htmlFor="inq-message">
                    Your Message
                  </label>
                  <textarea
                    id="inq-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little bit about what you're seeking..."
                    className={styles.textarea}
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={`btn ${submitting ? styles.btnSending : ''}`} style={{ width: '100%' }} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Inquiry'}
                </button>
                {formNotice.type === 'success' && (
                  <p className={styles.formStatusSuccess} role="status">
                    {formNotice.text}
                  </p>
                )}
                {formNotice.type === 'error' && (
                  <p className={styles.formStatusError} role="alert">
                    {formNotice.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
