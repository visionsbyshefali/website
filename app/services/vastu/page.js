export const metadata = {
  title: "Vastu Consulting | Visions By Shefali",
  description:
    "Vastu consulting to align your home or workspace energy for peace, stability, growth, and supportive daily flow.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="Personalized Assessment · Online"
      title="Vastu Consulting"
      description="Align your living and working environment for better energy flow, bringing more peace, growth, and abundance."
      image="/assets/images/service-vastu.png"
      benefits={["Home alignment", "Office energy flow", "Spatial harmony recommendations"]}
      highlights={[
        {
          title: "Space energy audit",
          text: "Your home or workspace layout is reviewed for directional and energetic imbalances.",
        },
        {
          title: "Practical remedies",
          text: "Simple and realistic vastu adjustments are suggested without drastic reconstruction.",
        },
        {
          title: "Goal-aligned setup",
          text: "Remedies are prioritized based on your focus: health, career, relationships, or peace.",
        },
      ]}
      process={[
        { title: "Consultation call", text: "We collect your concerns and required space details." },
        { title: "Analysis and mapping", text: "A vastu-based review is done with priority correction points." },
        { title: "Implementation roadmap", text: "You receive a stepwise action plan with practical remedies." },
      ]}
      videos={[
        { title: "Vastu Shastra Principles", embedUrl: "https://www.youtube.com/embed/YV_e3-A_I" },
        { title: "Vastu for Harmony at Home", embedUrl: "https://www.youtube.com/embed/5U7z8A-f7P0" }
      ]}
    />
  );
}
