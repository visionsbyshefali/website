export const metadata = {
  title: "Visions By Shefali | Heal, Grow & Thrive",
  description: "Visions By Shefali - Heal, Grow & Thrive with Intuitive Guidance by Shefali Soni.",
};

const pageHtml = `
    <main>
        <!-- Hero Section -->
        <section class="hero visible"
            style="min-height: 100vh; background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%), url('/assets/images/hero-bg.webp'); background-size: cover; background-position: center; opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container hero-content">
                <h1 class="hero-title">Heal, Grow &amp; <br>Thrive with <br>Intuitive Guidance</h1>
                <p style="font-size: 1.25rem; margin-bottom: 40px; color: #444; max-width: 600px;">In this nurturing and
                    safe space, you're empowered to shape the life you envision - embracing healing and growth as we
                    transform together.</p>
                <div class="hero-btns">
                    <a href="/contact" class="btn">Book a Session</a>
                </div>
                <div class="stats">
                    <div><strong style="font-size: 1.8rem; display: block; color: var(--primary-color);">500+</strong>
                        <span style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Happy
                            Clients</span></div>
                    <div><strong style="font-size: 1.8rem; display: block; color: var(--primary-color);">10+</strong>
                        <span style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Years of
                            Practice</span></div>
                    <div><strong style="font-size: 1.8rem; display: block; color: var(--primary-color);">8</strong>
                        <span style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Healing
                            Modalities</span></div>
                </div>
            </div>
        
            <div class="scroll-indicator" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'})">
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div></section>

        <!-- Our Approach -->
        <section class="approach visible"
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <div style=" margin-bottom: 80px;">
                    <span
                        style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Our
                        Approach</span>
                    <h2 class="section-title">Honour Your Healing Journey</h2>
                    <p class="section-subtitle">True healing encompasses every dimension of your being - body, mind, and
                        soul working in harmony.</p>
                </div>
                <div class="grid-3">
                    <div
                        style="padding: 50px; background: var(--secondary-color); border-radius: 30px; ">
                        <h3 style="margin-bottom: 20px;">Body</h3>
                        <p>Balance your heart rate, release physical tension, and support your body's natural healing
                            processes through energy work.</p>
                    </div>
                    <div
                        style="padding: 50px; background: var(--secondary-color); border-radius: 30px; ">
                        <h3 style="margin-bottom: 20px;">Mind</h3>
                        <p>Discover inner peace and clarity. Clear mental blockages for improved focus, better
                            decision-making, and a calmer state of being.</p>
                    </div>
                    <div
                        style="padding: 50px; background: var(--secondary-color); border-radius: 30px; ">
                        <h3 style="margin-bottom: 20px;">Soul</h3>
                        <p>Connect with your intuition. Strengthen inner awareness and unity, enriching your sense of
                            purpose and harmony with the universe.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section id="services-preview"
            style="padding: 120px 0px; background: rgb(250, 250, 250); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container">
                <div class="flex-mobile-col"
                    style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px;">
                    <div>
                        <span
                            style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Healing
                            Modalities</span>
                        <h2 class="section-title" style="margin-top: 10px;">Our Services</h2>
                    </div>
                    <a href="/services"
                        style="color: var(--primary-color); font-weight: 600; border-bottom: 2px solid var(--primary-color); padding-bottom: 2px;">View
                        All Services</a>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
                    <!-- Tarot -->
                    <div class="service-card-v2"
                        style="background: white; border-radius: 30px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <span
                            style="font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–90
                            min · Online</span>
                        <h3 style="margin: 15px 0;">Tarot Sessions</h3>
                        <p style="color: #666; margin-bottom: 25px;">Clarity and guidance when you feel confused,
                            emotionally overwhelmed, or unsure about your next step. Cards reveal what your soul already
                            knows.</p>
                        <a href="/services" style="font-weight: 600; color: var(--primary-color);">Explore
                            Reading →</a>
                    </div>
                    <!-- Crystal -->
                    <div class="service-card-v2"
                        style="background: white; border-radius: 30px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <span
                            style="font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60
                            min · Online</span>
                        <h3 style="margin: 15px 0;">Crystal Healing</h3>
                        <p style="color: #666; margin-bottom: 25px;">A gentle way to balance your energy using the
                            natural vibrations of crystals for grounded peace and emotional stability.</p>
                        <a href="/services"
                            style="font-weight: 600; color: var(--primary-color);">Explore Healing →</a>
                    </div>
                    <!-- Psychic -->
                    <div class="service-card-v2"
                        style="background: white; border-radius: 30px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <span
                            style="font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60
                            min · Online</span>
                        <h3 style="margin: 15px 0;">Psychic Healing</h3>
                        <p style="color: #666; margin-bottom: 25px;">A deep energetic cleanse to release heavy emotions,
                            stress, and soul-level patterns - bringing back lightness and clarity.</p>
                        <a href="/services"
                            style="font-weight: 600; color: var(--primary-color);">Explore Healing →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guide Section -->
        <section class="guide visible"
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <div class="grid-2">
                    <div class="guide-image-container">
                        <img src="/assets/images/shefali-soni.webp"
                            alt="Shefali Soni" class="guide-avatar">
                    </div>
                    <div>
                        <span
                            style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Meet
                            Your Guide</span>
                        <h2 class="section-title" style="margin-top: 15px; margin-bottom: 30px;">Shefali Soni - Your
                            <br>Healing Companion</h2>

                        <div class="guide-stats-row">
                            <div class="guide-stats-grid">
                                <div class="guide-stat-item"><strong>10+</strong> <span>Years of Practice</span></div>
                                <div class="guide-stat-item"><strong>500+</strong> <span>Students &amp; Clients</span>
                                </div>
                            </div>
                        </div>
                        <p style="font-size: 1.15rem; color: #555; line-height: 1.8; margin-bottom: 25px;">My journey
                            into healing began not as a profession, but as a deep inner calling. I wanted to understand
                            emotions, energy, and the unseen layers that shape our lives.</p>
                        <p style="font-size: 1.15rem; color: #555; line-height: 1.8; margin-bottom: 35px;">I am a Reiki
                            Grandmaster, a Certified Hypnosis Practitioner, and an intuitive healer. My approach is
                            simple and grounded - I believe in awareness, emotional safety, and guiding people back to
                            their own inner clarity.</p>
                        <blockquote
                            style="font-family: var(--heading-font); font-size: 1.8rem; color: var(--primary-color); font-style: italic; margin-bottom: 40px; border-left: 5px solid var(--primary-color); padding-left: 30px;">
                            "Healing is not about fixing something broken - it's about understanding, releasing, and
                            realigning."</blockquote>
                        <a href="/contact" class="btn">Book a Session</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Us -->
        <section
            style="padding: 120px 0px; background: var(--secondary-color); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container" style="max-width: 1400px; width: 95%;">
                <div style=" margin-bottom: 80px;">
                    <span
                        style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Why
                        Visions By Shefali</span>
                    <h2 class="section-title" style="margin-top: 15px;">A Space of Genuine Care</h2>
                    <p style="color: #666; margin-top: 20px;">What makes our approach different - and why clients
                        return.</p>
                </div>
                <div class="grid-4">
                    <div style="background: white; padding: 40px; border-radius: 40px; ">
                        <h4 style="margin-bottom: 15px;">No Fear - Only Compassion</h4>
                        <p style="font-size: 0.95rem; color: #666;">I never use fear-based practices. Every session is
                            held in a space of unconditional support and care.</p>
                    </div>
                    <div style="background: white; padding: 40px; border-radius: 40px; ">
                        <h4 style="margin-bottom: 15px;">100% Confidential</h4>
                        <p style="font-size: 0.95rem; color: #666;">Everything you share stays between us. Your privacy
                            and dignity are always respected.</p>
                    </div>
                    <div style="background: white; padding: 40px; border-radius: 40px; ">
                        <h4 style="margin-bottom: 15px;">Intuitive &amp; Personalized</h4>
                        <p style="font-size: 0.95rem; color: #666;">Each session is completely tailored to your specific
                            needs, challenges, and intentions.</p>
                    </div>
                    <div style="background: white; padding: 40px; border-radius: 40px; ">
                        <h4 style="margin-bottom: 15px;">Online &amp; Accessible</h4>
                        <p style="font-size: 0.95rem; color: #666;">Receive healing from the comfort of your own home,
                            no matter where you are in the world.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Preview -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container">
                <div style=" margin-bottom: 80px;">
                    <span
                        style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Client
                        Stories</span>
                    <h2 class="section-title" style="margin-top: 15px;">Real People. Real Results.</h2>
                    <p style="color: #666; margin-top: 20px;">More than 500 lives touched. Here are a few of their
                        journeys.</p>
                </div>
                <div class="grid-2">
                    <div style="padding: 40px; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 30px;">
                        <span style="color: #f1c40f; font-size: 1.2rem;">★★★★★</span>
                        <p style="font-style: italic; margin: 20px 0; color: #555;">"I felt so heavy and confused before
                            the session. Shefali listened without judging and helped me see things I was ignoring. I
                            feel much lighter now."</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div
                                style="width: 40px; height: 40px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary-color);">
                                A</div>
                            <div>
                                <h5 style="margin: 0;">Ananya S.</h5>
                                <span style="font-size: 0.8rem; color: #888;">Tarot Session</span>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 40px; background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 30px;">
                        <span style="color: #f1c40f; font-size: 1.2rem;">★★★★★</span>
                        <p style="font-style: italic; margin: 20px 0; color: #555;">"The Crystal Healing session was
                            incredibly calming. It felt like a reset button for my stress. I slept so well that night
                            and felt renewed for weeks."</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div
                                style="width: 40px; height: 40px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary-color);">
                                R</div>
                            <div>
                                <h5 style="margin: 0;">Rohan K.</h5>
                                <span style="font-size: 0.8rem; color: #888;">Crystal Healing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style=" margin-top: 50px;">
                    <a href="/testimonials" style="color: var(--primary-color); font-weight: 600;">Read All Stories
                        →</a>
                </div>
            </div>
        </section>

        <!-- SEO Section -->
        <section style="padding: 80px 0px; background: #fafafa; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
            <div class="container" style="max-width: 900px; margin: 0 auto; text-align: left;">
                <h2 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--text-color);">Your Trusted Partner for Online Tarot Reading &amp; Energy Healing</h2>
                <p style="color: #666; margin-bottom: 15px; font-size: 1rem; line-height: 1.8;">
                    Welcome to Visions by Shefali, a globally recognized sanctuary for spiritual wellness. Whether you're seeking clarity through an <strong>intuitive tarot reading</strong>, profound emotional release via a <strong>Reiki healing session</strong>, or energetic balance through <strong>crystal therapy</strong>, Shefali Soni offers a compassionate, judgment-free space tailored to your journey. As a certified Reiki Grandmaster and expert holistic healer, Shefali helps clients worldwide break through mental blocks and reconnect with their higher selves.
                </p>
                <p style="color: #666; margin-bottom: 15px; font-size: 1rem; line-height: 1.8;">
                    Our comprehensive remote healing services are designed to address the root causes of stress, anxiety, and spiritual stagnation. From exploring your life's purpose with <strong>Past Life Regression</strong> and <strong>Numerology</strong> to clearing stagnant energy through distance healing, our holistic approach ensures you receive the deepest level of care regardless of your physical location. Discover why over 500 happy clients across 15+ countries trust Visions by Shefali to guide them toward lasting clarity, emotional freedom, and inner peace.
                </p>
            </div>
        </section>

        <!-- Final CTA -->
        <section
            style="padding: 120px 0px; background: var(--primary-color); color: white;  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container">
                <span style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; opacity: 0.8;">Begin
                    Today</span>
                <h2 class="section-title" style="margin-top: 20px; color: white;">Your Life is Waiting. <br>Healing is
                    Closer Than You Think.</h2>
                <p style="max-width: 700px; margin: 30px auto 50px; font-size: 1.25rem; opacity: 0.9;">Book a private,
                    confidential session and discover the clarity you've been searching for.</p>
                <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <a href="/contact" class="btn" style="background: white; color: var(--primary-color);">Book a
                        Session</a>
                    <a href="/about" class="btn"
                        style="background: transparent; border: 1px solid white; color: white;">Meet Shefali</a>
                </div>
                <p style="margin-top: 30px; font-size: 0.9rem; opacity: 0.7;">All sessions online · 100% confidential ·
                    No prior experience needed</p>
            </div>
        </section>
    </main>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
