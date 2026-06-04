export const metadata = {
  title: "Psychic Healing | Visions By Shefali",
  description:
    "Deep energetic cleansing sessions to clear heaviness, restore emotional flow, and reconnect you with inner clarity.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="45–60 min · Online Session"
      title="Psychic Healing"
      description="A deep energetic cleanse to release heavy emotions, stress patterns, and restore your natural sense of lightness and clarity."
      image="/assets/images/service-psychic.webp"
      benefits={["Aura cleansing", "Energy blockage release", "Mental and emotional lightness"]}
      highlights={[
        {
          title: "Energy scan",
          text: "We identify heavy emotional signatures and repetitive energetic patterns affecting your wellbeing.",
        },
        {
          title: "Cleansing and reset",
          text: "The session focuses on clearing stagnant energy and restoring a healthier energetic flow.",
        },
        {
          title: "Stabilization",
          text: "You are guided through grounding tools so the healing integrates gently into daily life.",
        },
      ]}
      process={[
        { title: "Check-in", text: "We discuss your current emotional and energetic state." },
        { title: "Psychic clearing", text: "Focused healing is done for release, reset, and energetic protection." },
        { title: "Post-care", text: "You receive brief after-care guidance for the next 48 hours." },
      ]}
      videos={[
        { title: "What is Psychic Healing?", embedUrl: "https://www.youtube.com/embed/6473wD_w8_w" },
        { title: "Aura and Energy Cleanse", embedUrl: "https://www.youtube.com/embed/M19v6_R_oEw" }
      ]}
    />
  );
}
