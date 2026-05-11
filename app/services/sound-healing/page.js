export const metadata = {
  title: "Sound Healing | Visions By Shefali",
  description:
    "Sound healing sessions with restorative frequencies to calm the mind, regulate the nervous system, and restore harmony.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="45–60 min · Online Session"
      title="Sound Healing"
      description="Immerse in healing frequencies that clear mental clutter and recalibrate your nervous system for peace."
      image="/assets/images/treatment-sound.png"
      benefits={["Frequency alignment", "Nervous system calming", "Mental reset and stillness"]}
      highlights={[
        {
          title: "Vibrational reset",
          text: "Sound-based techniques help your body and mind shift out of stress and into coherence.",
        },
        {
          title: "Deep rest state",
          text: "You may experience emotional release, clarity, and improved sleep quality post session.",
        },
        {
          title: "Supportive integration",
          text: "Simple grounding and listening recommendations are shared for sustained calm.",
        },
      ]}
      process={[
        { title: "Preparation", text: "We set intent and prepare your space for uninterrupted listening." },
        { title: "Guided sound journey", text: "A curated sequence of frequencies is used for your goal." },
        { title: "Reflection", text: "Session closes with observations and post-session practices." },
      ]}
      videos={[
        { title: "Power of Sound Vibrations", embedUrl: "https://www.youtube.com/embed/h-rWov-86S0" },
        { title: "Benefits of Sound Baths", embedUrl: "https://www.youtube.com/embed/17lU_I9P0_U" }
      ]}
    />
  );
}
