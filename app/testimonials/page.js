export const metadata = {
  title: "Testimonials | Visions By Shefali",
  description: "Read real stories and experiences from individuals who have found healing and guidance with Shefali Soni.",
};

const pageHtml = `
    <main>
        <!-- Page Title -->
        <section
            style="min-height: 100vh; display: flex; align-items: center; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('/assets/images/testimonials-bg.webp'); background-size: cover; background-position: center; text-align: center;  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="hero visible dark-hero">
            <div class="container hero-content">
                <span
                    style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Testimonials</span>
                <h1 class="hero-title">Real Stories. <br>Real Healing.</h1>
                <p style="font-size: 1.35rem; max-width: 800px; margin: 0 auto;  line-height: 1.6;">Shared
                    with permission, these are the experiences of those who have walked this path with us.</p>
                <div style="margin-top: 40px; display: flex; justify-content: center; gap: 20px;">
                    <div style="">
                        <strong style="font-size: 2.2rem; color: #ffffff; display: block;">500+</strong>
                        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Happy
                            Clients</span>
                    </div>
                </div>
            </div>
        
            <div class="scroll-indicator" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'})">
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div></section>

        <!-- Testimonial Grid -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255); opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;"
            class="visible">
            <div class="container">
                <div class="grid-2" style="margin-bottom: 60px;">
                    <div
                        style="padding: 50px; background: #fafafa; border-radius: 40px; border: 1px solid #f0f0f0; position: relative;">
                        <span style="color: #f1c40f; font-size: 1.2rem;">★★★★★</span>
                        <p style="font-size: 1.15rem; color: #555; font-style: italic; margin: 25px 0; line-height: 1.8;">
                            "I felt so heavy and confused before the session. Shefali listened without judging and
                            helped me see things I was ignoring. I feel much lighter now and have more clarity in my life."</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div
                                style="width: 50px; height: 50px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary-color);">
                                A</div>
                            <div>
                                <h5 style="margin: 0; font-size: 1.1rem;">Ananya S.</h5>
                                <span style="font-size: 0.85rem; color: #888;">Tarot Reading</span>
                            </div>
                        </div>
                    </div>

                    <div
                        style="padding: 50px; background: #fafafa; border-radius: 40px; border: 1px solid #f0f0f0; position: relative;">
                        <span style="color: #f1c40f; font-size: 1.2rem;">★★★★★</span>
                        <p style="font-size: 1.15rem; color: #555; font-style: italic; margin: 25px 0; line-height: 1.8;">
                            "The Crystal Healing session was incredibly calming. It felt like a reset button for my
                            stress. I slept so well that night and felt renewed for weeks. A truly professional experience."</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div
                                style="width: 50px; height: 50px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary-color);">
                                R</div>
                            <div>
                                <h5 style="margin: 0; font-size: 1.1rem;">Rohan K.</h5>
                                <span style="font-size: 0.85rem; color: #888;">Crystal Healing</span>
                            </div>
                        </div>
                    </div>

                    <div
                        style="padding: 50px; background: #fafafa; border-radius: 40px; border: 1px solid #f0f0f0; position: relative;">
                        <span style="color: #f1c40f; font-size: 1.2rem;">★★★★★</span>
                        <p style="font-size: 1.15rem; color: #555; font-style: italic; margin: 25px 0; line-height: 1.8;">
                            "Shefali has a very grounding presence. During our Psychic Healing session, I felt like she could pinpoint exactly where I was holding tension and helped me release it effortlessly."</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div
                                style="width: 50px; height: 50px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary-color);">
                                M</div>
                            <div>
                                <h5 style="margin: 0; font-size: 1.1rem;">Meera G.</h5>
                                <span style="font-size: 0.85rem; color: #888;">Psychic Healing</span>
                            </div>
                        </div>
                    </div>

                    <div
                        style="padding: 50px; background: #fafafa; border-radius: 40px; border: 1px solid #f0f0f0; position: relative;">
                        <span style="color: #f1c40f; font-size: 1.2rem;">★★★★★</span>
                        <p style="font-size: 1.15rem; color: #555; font-style: italic; margin: 25px 0; line-height: 1.8;">
                            "The Past Life Regression session was life-changing. It helped me understand fears I couldn't explain. Shefali guided me with so much safety and care. Highly recommend her sessions."</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div
                                style="width: 50px; height: 50px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary-color);">
                                S</div>
                            <div>
                                <h5 style="margin: 0; font-size: 1.1rem;">Sandeep P.</h5>
                                <span style="font-size: 0.85rem; color: #888;">Past Life Regression</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Google Reviews Badge Style -->
        <section
            style="padding: 80px 0px; background: var(--secondary-color);  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <h3 style="margin-bottom: 30px;">Trusted globally by clients from over 15 countries.</h3>
                <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
                    <span style="font-weight: 700; font-size: 1.5rem;">4.9/5</span>
                    <div style="color: #f1c40f;">★★★★★</div>
                    <span style="color: #888;">based on Google Reviews</span>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <section
            style="padding: 120px 0px; background: rgb(255, 255, 255);  opacity: 1; transform: translateY(0px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
            <div class="container">
                <h2 class="section-title" style="margin-bottom: 30px;">Write Your Own Healing Story</h2>
                <p style="font-size: 1.25rem; color: #555; max-width: 700px; margin: 0 auto 50px;">Every journey begins
                    with a single step toward awareness. Book a session to discover your inner clarity.</p>
                <a href="/contact" class="btn">Discover the Clarity</a>
            </div>
        </section>
    </main>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
