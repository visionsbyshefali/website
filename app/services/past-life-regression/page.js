export const metadata = {
  title: "Past Life Regression | Visions By Shefali",
  description:
    "Explore past life regression to understand recurring patterns, emotional blocks, and deeper soul-level lessons.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="60–120 min · Online Session"
      title="Past Life Regression"
      description="A guided journey to find root causes of current life patterns, fears, and soul connections through gentle subconscious work."
      image="/assets/images/service-plr.webp"
      benefits={["Pattern identification", "Subconscious release", "Soul-level perspective"]}
      highlights={[
        {
          title: "Safe hypnotic approach",
          text: "Regression is done gradually with emotional safety and clear practitioner guidance.",
        },
        {
          title: "Root-cause clarity",
          text: "Useful for recurring fears, relationship loops, and deeply embedded emotional blocks.",
        },
        {
          title: "Healing integration",
          text: "Insights are translated into present-life action and healing recommendations.",
        },
      ]}
      process={[
        { title: "Pre-talk", text: "We review your goal and ensure readiness for regression work." },
        { title: "Guided journey", text: "You are gently led into regression to access meaningful memories." },
        { title: "Debrief", text: "We process insights and identify next steps for emotional closure." },
      ]}
      videos={[
        { title: "Introduction to PLR", embedUrl: "https://www.youtube.com/embed/Z9wZ0_S3Y-Y" },
        { title: "How PLR Heals Today's Patterns", embedUrl: "https://www.youtube.com/embed/O-Lp_jU_m8k" }
      ]}
    />
  );
}
