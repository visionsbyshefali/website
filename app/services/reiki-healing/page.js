export const metadata = {
  title: "Reiki Healing | Visions By Shefali",
  description:
    "Receive gentle Reiki energy healing for deep relaxation, emotional reset, and natural restoration of your inner balance.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="45–60 min · Online Session"
      title="Reiki Healing"
      description="A gentle Japanese energy healing practice that promotes deep relaxation, stress reduction, and natural restoration."
      image="/assets/images/treatment-reiki.png"
      benefits={["Deep relaxation", "Stress reduction", "Inner energetic restoration"]}
      highlights={[
        {
          title: "Calming energy work",
          text: "Reiki is shared in a soothing and non-invasive way to support your body-mind healing response.",
        },
        {
          title: "Nervous system support",
          text: "Sessions help regulate overwhelm and bring your system into a calmer, safer state.",
        },
        {
          title: "Gentle recovery space",
          text: "Ideal for emotional fatigue, burnout phases, and feeling energetically depleted.",
        },
      ]}
      process={[
        { title: "Grounding", text: "We begin with breath and intention alignment." },
        { title: "Reiki transmission", text: "Healing energy is offered through guided remote reiki methods." },
        { title: "Closure", text: "Session ends with integration and self-care suggestions." },
      ]}
      videos={[
        { title: "What is Reiki? A Short Intro", embedUrl: "https://www.youtube.com/embed/6473wD_w8_w" },
        { title: "Benefits of Reiki Sessions", embedUrl: "https://www.youtube.com/embed/MvYI-WwWfK0" }
      ]}
    />
  );
}
