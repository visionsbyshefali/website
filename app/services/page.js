export const metadata = {
  title: "Our Services | Visions By Shefali",
  description: "Explore healing modalities including tarot, crystal healing, psychic healing, and more at Visions By Shefali.",
};

const pageHtml = `
    <main>
        <!-- Page Title -->
        <section
            style="min-height: 100vh; display: flex; align-items: center; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('/assets/images/services-bg.webp'); background-size: cover; background-position: center; text-align: center;  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="hero visible dark-hero">
            <div class="container hero-content">
                <span
                    style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Our
                    Healing Modalities</span>
                <h1 class="hero-title">Services for Your <br>Journey</h1>
                <p style="font-size: 1.35rem; max-width: 800px; margin: 0 auto;  line-height: 1.6;">A gentle
                    space for clarity, healing, and inner balance. Explore the ways we can walk this journey together.
                </p>
            </div>
        
            <div class="scroll-indicator" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'})">
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div></section>

        <!-- Services Detailed List -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <!-- Tarot -->
                <div class="grid-2" style="align-items: center; margin-bottom: 120px; gap: 80px;">
                    <div class="flex-mobile-col">
                        <span
                            style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–90
                            min · Online · One-to-one</span>
                        <h2 class="section-title" style="margin: 20px 0 25px; font-family: var(--heading-font);">Tarot Sessions</h2>
                        <p style="font-size: 1.2rem; color: #555; line-height: 1.8; margin-bottom: 35px;">Clarity and
                            guidance when you feel confused, emotionally overwhelmed, or unsure about your next step.
                            The cards reveal what your inner wisdom already knows. We dive deep into your questions and uncover hidden truths.</p>
                        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display: grid; gap: 15px;">
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Relationship Insights</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Career & Life Path</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Decision Guidance</li>
                        </ul>
                        <a href="/services/tarot" class="btn">Explore Session</a>
                    </div>
                    <div><img src="/assets/images/service-tarot.webp" alt="Tarot Session" loading="eager" decoding="async"
                            style="width: 100%; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.1);"></div>
                </div>

                <!-- Crystal -->
                <div class="grid-2" style="align-items: center; margin-bottom: 120px; gap: 80px;">
                    <div style="order: 2;">
                        <span
                            style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60
                            min · Online · One-to-one</span>
                        <h2 class="section-title" style="margin: 20px 0 25px; font-family: var(--heading-font);">Crystal Healing</h2>
                        <p style="font-size: 1.2rem; color: #555; line-height: 1.8; margin-bottom: 35px;">A gentle way
                            to balance your energy using the natural vibrations of crystals. Experience grounded peace
                            and emotional restoration through targeted energy work with sacred stones.</p>
                        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display: grid; gap: 15px;">
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Chakra Balancing</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Emotional Reset</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Stress Reduction</li>
                        </ul>
                        <a href="/services/crystal-healing" class="btn">Explore Session</a>
                    </div>
                    <div style="order: 1;"><img src="/assets/images/service-crystal.webp" alt="Crystal Healing" loading="lazy" decoding="async"
                            style="width: 100%; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.1);"></div>
                </div>

                <!-- Psychic -->
                <div class="grid-2" style="align-items: center; margin-bottom: 120px; gap: 80px;">
                    <div>
                        <span
                            style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60
                            min · Online · One-to-one</span>
                        <h2 class="section-title" style="margin: 20px 0 25px; font-family: var(--heading-font);">Psychic Healing</h2>
                        <p style="font-size: 1.2rem; color: #555; line-height: 1.8; margin-bottom: 35px;">A deep
                            energetic cleanse to release heavy emotions, stress patterns, and restore your natural sense
                            of lightness and clarity. We work with your aura to remove blockages and stagnant energy.</p>
                        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display: grid; gap: 15px;">
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Aura Cleansing</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Energy Blockage Removal</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Mental Clarity</li>
                        </ul>
                        <a href="/services/psychic-healing" class="btn">Explore Session</a>
                    </div>
                    <div><img src="/assets/images/service-psychic.webp" alt="Psychic Healing" loading="lazy" decoding="async"
                            style="width: 100%; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.1);"></div>
                </div>

                <!-- Reiki -->
                <div class="grid-2" style="align-items: center; margin-bottom: 120px; gap: 80px;">
                    <div style="order: 2;">
                        <span
                            style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60
                            min · Online · One-to-one</span>
                        <h2 class="section-title" style="margin: 20px 0 25px; font-family: var(--heading-font);">Reiki Healing</h2>
                        <p style="font-size: 1.2rem; color: #555; line-height: 1.8; margin-bottom: 35px;">A gentle Japanese energy healing practice that
                            promotes deep relaxation, stress reduction, and natural restoration. Experience the flow of healing energy that supports your body's innate healing ability.</p>
                        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display: grid; gap: 15px;">
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Deep Relaxation</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Stress Relief</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Energy Restoration</li>
                        </ul>
                        <a href="/services/reiki-healing" class="btn">Explore Session</a>
                    </div>
                    <div style="order: 1;"><img src="/assets/images/treatment-reiki.webp" alt="Reiki Healing" loading="lazy" decoding="async"
                            style="width: 100%; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.1);"></div>
                </div>

                <!-- Sound -->
                <div class="grid-2" style="align-items: center; margin-bottom: 120px; gap: 80px;">
                    <div>
                        <span
                            style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60
                            min · Online · One-to-one</span>
                        <h2 class="section-title" style="margin: 20px 0 25px; font-family: var(--heading-font);">Sound Healing</h2>
                        <p style="font-size: 1.2rem; color: #555; line-height: 1.8; margin-bottom: 35px;">Immerse in healing frequencies that clear mental
                            clutter and recalibrate your nervous system for peace. Let the vibrations of singing bowls and gongs guide you to harmony.</p>
                        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display: grid; gap: 15px;">
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Nervous System Reset</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Mental Clarity</li>
                            <li style="display: flex; align-items: center; gap: 10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Vibrational Healing</li>
                        </ul>
                        <a href="/services/sound-healing" class="btn">Explore Session</a>
                    </div>
                    <div><img src="/assets/images/treatment-sound.webp" alt="Sound Healing" loading="lazy" decoding="async"
                            style="width: 100%; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.1);"></div>
                </div>

                <!-- More Services -->
                <div style=" margin-top: 100px; margin-bottom: 60px;">
                    <h2 class="section-title" style="font-family: var(--heading-font);">Specialized Guidance</h2>
                </div>

                <div class="grid-3">
                    <!-- PLR -->
                    <div class="specialized-card">
                        <img src="/assets/images/service-plr.webp" loading="lazy" decoding="async" style="width: 100%; border-radius: 20px; margin-bottom: 30px;" />
                        <span style="font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">60–120 min</span>
                        <h3 style="margin: 15px 0; font-family: var(--heading-font); font-size: 1.8rem;">Past Life Regression</h3>
                        <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">A guided journey to find the root cause of current life patterns, fears, or soul connections through gentle hypnosis.</p>
                        <a href="/services/past-life-regression" style="font-weight: 600; color: var(--primary-color); text-decoration: none;">Learn More →</a>
                    </div>
                    <!-- Vastu -->
                    <div class="specialized-card">
                        <img src="/assets/images/service-vastu.webp" loading="lazy" decoding="async" style="width: 100%; border-radius: 20px; margin-bottom: 30px;" />
                        <span style="font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">Personalized</span>
                        <h3 style="margin: 15px 0; font-family: var(--heading-font); font-size: 1.8rem;">Vastu Consulting</h3>
                        <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">Align your living and working environment for better energy flow, bringing more peace, growth, and abundance.</p>
                        <a href="/services/vastu" style="font-weight: 600; color: var(--primary-color); text-decoration: none;">Learn More →</a>
                    </div>
                    <!-- Numerology -->
                    <div class="specialized-card">
                        <img src="/assets/images/service-numerology.webp" loading="lazy" decoding="async" style="width: 100%; border-radius: 20px; margin-bottom: 30px;" />
                        <span style="font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">45–60 min</span>
                        <h3 style="margin: 15px 0; font-family: var(--heading-font); font-size: 1.8rem;">Numerology & Name</h3>
                        <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">Align your name and birth date vibrations with your life goals for a harmonious path and deeper self-understanding.</p>
                        <a href="/services/numerology" style="font-weight: 600; color: var(--primary-color); text-decoration: none;">Learn More →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- SEO Section -->
        <section style="padding: 80px 0px; background: #fff; border-top: 1px solid #f0f0f0;">
            <div class="container" style="max-width: 900px; margin: 0 auto; text-align: left;">
                <h2 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--text-color);">Comprehensive Online Energy Healing Services</h2>
                <p style="color: #666; margin-bottom: 15px; font-size: 1rem; line-height: 1.8;">
                    Our comprehensive suite of <strong>online energy healing services</strong> is specifically tailored to address your spiritual, emotional, and physical needs. From highly accurate <strong>intuitive tarot readings</strong> to restorative <strong>distance Reiki sessions</strong>, our holistic methods aim to bring you deep clarity and lasting peace.
                </p>
                <p style="color: #666; margin-bottom: 15px; font-size: 1rem; line-height: 1.8;">
                    Whether you are struggling with anxiety and need the balancing effects of <strong>Crystal Therapy</strong>, or you want to uncover and resolve deep-seated karmic blockages through <strong>Past Life Regression</strong>, Shefali Soni provides a safe and transformative environment. We also specialize in Vastu consulting and Numerology to help you align your personal and professional spaces with positive universal energy. Start your healing journey today with a specialized session designed entirely around your soul's unique path.
                </p>
            </div>
        </section>

        <!-- Help Choose Section -->
        <section
            style="padding: 120px 0px; background: var(--secondary-color);  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <span
                    style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--primary-color);">Not
                    Sure Where to Start?</span>
                <h2 class="section-title" style="margin-top: 20px; margin-bottom: 30px; font-family: var(--heading-font);">Let's Find the Right Path Together</h2>
                <p style="font-size: 1.25rem; color: #555; max-width: 700px; margin: 0 auto 50px;">Reach out for a brief
                    conversation, and we can identify the most supportive modality for your unique journey.</p>
                <a href="/contact" class="btn">Connect With Shefali</a>
            </div>
        </section>
    </main>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
