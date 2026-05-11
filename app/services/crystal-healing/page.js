export const metadata = {
  title: "Crystal Healing | Visions By Shefali",
  description:
    "Balance your emotional and energetic state with crystal healing sessions designed for calm, grounding, and clarity.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="45–60 min · Online Session"
      title="Crystal Healing"
      description="A gentle way to balance your energy using the natural vibrations of crystals for emotional calm and grounded healing."
      image="/assets/images/service-crystal.png"
      benefits={["Chakra balancing", "Emotional reset", "Stress and overthinking relief"]}
      highlights={[
        {
          title: "Energy mapping",
          text: "We identify where emotional heaviness and energetic fatigue are showing up in your system.",
        },
        {
          title: "Crystal-supported healing",
          text: "Specific stones are selected for your intent and gently integrated into the session practice.",
        },
        {
          title: "After-session guidance",
          text: "You receive simple practices to maintain calm and regulate your energy at home.",
        },
      ]}
      process={[
        { title: "Intake and intention", text: "We start with your emotional state and healing focus." },
        { title: "Crystal protocol", text: "A personalized crystal flow is used to support balance and release." },
        { title: "Integration", text: "We end with grounding and practical follow-up suggestions." },
      ]}
      videos={[
        { title: "How Crystal Healing Works", embedUrl: "https://www.youtube.com/embed/pM9zY1S6e-M" },
        { title: "Cleansing Your Crystals", embedUrl: "https://www.youtube.com/embed/8-S0XyVIsgI" }
      ]}
    />
  );
}
