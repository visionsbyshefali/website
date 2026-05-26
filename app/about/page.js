export const metadata = {
  title: "About Shefali Soni | Visions By Shefali",
  description: "Learn about Shefali Soni, her healing journey, credentials, and compassionate approach at Visions By Shefali.",
};

const pageHtml = `
    <main>
        <!-- Page Title & Hero Introduction -->
        <section
            style="min-height: 100vh; display: flex; align-items: center; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('/assets/images/about-bg.png'); background-size: cover; background-position: center; text-align: center;  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="hero visible dark-hero">
            <div class="container hero-content">
                <span
                    style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">About
                    Shefali Soni</span>
                <h1 class="hero-title">A Gentle Guide on Your <br>Healing Path</h1>
                <p style="font-size: 1.35rem; max-width: 800px; margin: 0 auto;  line-height: 1.6;">Helping
                    you find clarity, emotional balance, and inner strength through intuitive guidance and compassionate
                    support.</p>
                <div style="margin-top: 50px;">
                    <span
                        style="font-family: var(--heading-font); font-size: 2rem; color: #ffffff;">Shefali
                        Soni</span>
                    <p
                        style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; font-weight: 600; margin-top: 5px;">
                        Intuitive Healer</p>
                </div>
            </div>
        
            <div class="scroll-indicator" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'})">
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div></section>

        <!-- My Story -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container">
                <div class="grid-2">
                    <div>
                        <span
                            style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">My
                            Story</span>
                        <h2 class="section-title" style="margin-top: 20px; margin-bottom: 30px;">My Journey Into
                            <br>Healing</h2>
                        <div style="font-size: 1.15rem; color: #555; line-height: 1.8;">
                            <p style="margin-bottom: 25px;">My journey into healing and intuitive work did not begin as
                                a profession. It began as a deep inner calling to understand emotions, energy, and the
                                unseen layers that shape our lives.</p>
                            <p style="margin-bottom: 25px;">Over the years, through learning, practice, and personal
                                transformation, I realized that true healing happens when we gently work with the
                                subconscious mind, emotional memories, and energetic patterns together.</p>
                            <p style="margin-bottom: 35px;">I am a Reiki Grandmaster, a Certified Hypnosis Practitioner,
                                and an intuitive healer. My approach is simple and grounded. I do not believe in
                                fear-based practices or unrealistic promises.</p>
                        </div>
                        <blockquote
                            style="font-family: var(--heading-font); font-size: 2rem; color: var(--primary-color); font-style: italic; margin-bottom: 40px; border-left: 5px solid var(--primary-color); padding-left: 30px;">
                            "I believe in awareness, emotional safety, and guiding people back to their own inner
                            clarity."</blockquote>
                        <a href="/contact" class="btn">Begin Your Journey</a>
                    </div>
                    <div style="position: relative;">
                        <img src="/assets/images/shefali-soni.png"
                            alt="Shefali Soni" style="width: 100%; border-radius: 40px;">
                    </div>
                </div>
            </div>
        </section>

        <!-- My Philosophy -->
        <section
            style="padding: 120px 0px; background: rgb(250, 250, 250); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <div style=" margin-bottom: 80px;">
                    <span
                        style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">My
                        Philosophy</span>
                    <h2 class="section-title" style="margin-top: 20px; margin-bottom: 30px;">How I Work With You</h2>
                    <p style="font-size: 1.3rem; font-style: italic; color: var(--primary-color);">"Healing is not about
                        fixing something broken. It is about understanding, releasing, and realigning."</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                    <div
                        style="padding: 50px; background: white; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <h4 style="margin-bottom: 15px;">Gentle &amp; Grounding</h4>
                        <p style="font-size: 0.95rem; color: #666;">Every session is held with deep care, moving at your
                            own pace.</p>
                    </div>
                    <div
                        style="padding: 50px; background: white; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <h4 style="margin-bottom: 15px;">Emotionally Supportive</h4>
                        <p style="font-size: 0.95rem; color: #666;">I hold space for all emotions — nothing you feel
                            will ever be dismissed.</p>
                    </div>
                    <div
                        style="padding: 50px; background: white; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <h4 style="margin-bottom: 15px;">Guided Intuitively</h4>
                        <p style="font-size: 0.95rem; color: #666;">Each session is responsive to your energy in the
                            moment, not a fixed script.</p>
                    </div>
                    <div
                        style="padding: 50px; background: white; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); border: 1px solid #f2f2f2;">
                        <h4 style="margin-bottom: 15px;">Respectful of Boundaries</h4>
                        <p style="font-size: 0.95rem; color: #666;">Your comfort level is always honored. You remain in
                            full control.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Credentials -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <div style=" margin-bottom: 80px;">
                    <span
                        style="color: var(--primary-color); font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Credentials</span>
                    <h2 class="section-title" style="margin-top: 20px;">Experience &amp; Training</h2>
                </div>
                <div class="grid-3" style="margin-bottom: 80px;">
                    <div style="">
                        <strong style="font-size: 4rem; color: var(--primary-color); display: block;">10+</strong>
                        <span style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Years of
                            Practice</span>
                    </div>
                    <div style="">
                        <strong style="font-size: 4rem; color: var(--primary-color); display: block;">500+</strong>
                        <span style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Clients
                            Helped</span>
                    </div>
                    <div style="">
                        <strong style="font-size: 4rem; color: var(--primary-color); display: block;">8</strong>
                        <span style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Healing
                            Modalities</span>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                    <div style="padding: 40px; border: 1px solid #f0f0f0; border-radius: 20px;">
                        <h4 style="margin-bottom: 10px;">Reiki Grandmaster</h4>
                        <p style="font-size: 0.9rem; color: #888;">Traditional Usui Reiki lineage</p>
                    </div>
                    <div style="padding: 40px; border: 1px solid #f0f0f0; border-radius: 20px;">
                        <h4 style="margin-bottom: 10px;">Hypnosis Practitioner</h4>
                        <p style="font-size: 0.9rem; color: #888;">Past life regression &amp; subconscious healing</p>
                    </div>
                    <div style="padding: 40px; border: 1px solid #f0f0f0; border-radius: 20px;">
                        <h4 style="margin-bottom: 10px;">Tarot &amp; Intuitive Reading</h4>
                        <p style="font-size: 0.9rem; color: #888;">Advanced tarot methodologies</p>
                    </div>
                    <div style="padding: 40px; border: 1px solid #f0f0f0; border-radius: 20px;">
                        <h4 style="margin-bottom: 10px;">Numerology Certification</h4>
                        <p style="font-size: 0.9rem; color: #888;">Pythagorean &amp; Chaldean systems</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <section
            style="padding: 120px 0px; background: var(--secondary-color);  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <span
                    style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--primary-color);">Ready
                    to Begin?</span>
                <h2 class="section-title" style="margin-top: 20px; margin-bottom: 30px;">Book a Private Session</h2>
                <p style="font-size: 1.25rem; color: #555; max-width: 700px; margin: 0 auto 50px;">Discover the clarity
                    you've been searching for. A confidential, compassionate session awaits you.</p>
                <a href="/contact" class="btn">Discover the Clarity</a>
            </div>
        </section>
    </main>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
