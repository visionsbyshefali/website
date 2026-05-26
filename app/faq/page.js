export const metadata = {
  title: "Frequently Asked Questions | Visions By Shefali",
  description: "Find answers to common questions about healing sessions, tarot readings, online booking, and confidentiality.",
};

const pageHtml = `
    <main>
        <!-- Page Title -->
        <section
            style="min-height: 100vh; display: flex; align-items: center; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('/assets/images/faq-bg.png'); background-size: cover; background-position: center; text-align: center;  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="hero visible dark-hero">
            <div class="container hero-content">
                <span
                    style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Helpful
                    Information</span>
                <h1 class="hero-title">Common Questions</h1>
                <p style="font-size: 1.35rem; max-width: 800px; margin: 0 auto;  line-height: 1.6;">Everything
                    you need to know before your first session. We believe in transparency and emotional safety.</p>
            </div>
        
            <div class="scroll-indicator" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'})">
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div></section>

        <!-- FAQ Content -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container" style="max-width: 900px;">
                <div style="margin-bottom: 60px;">
                    <div style="margin-bottom: 40px; padding: 40px; background: #fafafa; border-radius: 30px;">
                        <h3 style="margin-bottom: 15px; color: var(--primary-color);">How are sessions conducted online?
                        </h3>
                        <p style="font-size: 1.1rem; color: #555; line-height: 1.7;">All sessions take place via Google
                            Meet, Zoom, or WhatsApp video/audio calls. You will receive a link after booking. It is just
                            as effective as in-person sessions.</p>
                    </div>

                    <div style="margin-bottom: 40px; padding: 40px; background: #fafafa; border-radius: 30px;">
                        <h3 style="margin-bottom: 15px; color: var(--primary-color);">Is my session confidential?</h3>
                        <p style="font-size: 1.1rem; color: #555; line-height: 1.7;">Yes, 100%. Everything shared during
                            a session remains completely confidential. Your privacy and dignity are our highest
                            priorities.</p>
                    </div>

                    <div style="margin-bottom: 40px; padding: 40px; background: #fafafa; border-radius: 30px;">
                        <h3 style="margin-bottom: 15px; color: var(--primary-color);">How should I prepare for a
                            healing session?</h3>
                        <p style="font-size: 1.1rem; color: #555; line-height: 1.7;">Find a quiet, private space where
                            you won't be interrupted. Have some water nearby and keep an open heart. No prior experience
                            with healing or tarot is required.</p>
                    </div>

                    <div style="margin-bottom: 40px; padding: 40px; background: #fafafa; border-radius: 30px;">
                        <h3 style="margin-bottom: 15px; color: var(--primary-color);">Do you use fear-based
                            predictions?</h3>
                        <p style="font-size: 1.1rem; color: #555; line-height: 1.7;">Never. My approach is rooted in
                            empowerment and compassion. We focus on understanding current patterns and finding a path
                            forward, rather than instilling fear.</p>
                    </div>

                    <div style="margin-bottom: 40px; padding: 40px; background: #fafafa; border-radius: 30px;">
                        <h3 style="margin-bottom: 15px; color: var(--primary-color);">How many sessions will I need?
                        </h3>
                        <p style="font-size: 1.1rem; color: #555; line-height: 1.7;">This depends entirely on your
                            situation. Some find clarity in a single session, while others prefer ongoing support for
                            deeper healing work. We can discuss this during our first meeting.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Help Section -->
        <section
            style="padding: 100px 0px; background: var(--secondary-color);  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <h2 class="section-title" style="margin-bottom: 30px;">Have More Questions?</h2>
                <p style="font-size: 1.25rem; color: #555; max-width: 700px; margin: 0 auto 40px;">If you're unsure about
                    which session is right for you, feel free to reach out for a brief chat.</p>
                <a href="/contact" class="btn">Connect with Shefali</a>
            </div>
        </section>
    </main>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
