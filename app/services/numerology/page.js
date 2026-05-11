export const metadata = {
  title: "Numerology & Name | Visions By Shefali",
  description:
    "Numerology and name analysis sessions to align personal vibrations with your goals, timing, and life direction.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="45–60 min · Online Session"
      title="Numerology & Name"
      description="Align your name and birth date vibrations with your life goals for a harmonious path and deeper self-understanding."
      image="/assets/images/service-numerology.png"
      benefits={["Name vibration analysis", "Birth date insight", "Life path direction"]}
      highlights={[
        {
          title: "Personal number map",
          text: "We decode your core numbers to understand strengths, patterns, and current challenges.",
        },
        {
          title: "Timing and alignment",
          text: "Identify favorable periods for decisions in relationships, career, and self-development.",
        },
        {
          title: "Practical corrections",
          text: "Suggestions may include naming alignment and lifestyle shifts to support your goals.",
        },
      ]}
      process={[
        { title: "Data collection", text: "We use your name and date details for the numerology map." },
        { title: "Interpretation", text: "Core numbers are explained with examples from your life context." },
        { title: "Guided actions", text: "You receive practical guidance you can apply immediately." },
      ]}
      videos={[
        { title: "Basics of Numerology", embedUrl: "https://www.youtube.com/embed/n3-Z_z-S-y4" },
        { title: "How Numbers Shape Your Life", embedUrl: "https://www.youtube.com/embed/_L_o1n7C_XU" }
      ]}
    />
  );
}
