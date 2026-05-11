export const metadata = {
  title: "Tarot Sessions | Visions By Shefali",
  description:
    "Gain clarity for relationships, career and major life decisions with a grounded tarot guidance session.",
};

import ServiceDetailPage from "../ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      badge="45–90 min · Online Session"
      title="Tarot Sessions"
      description="Clarity and guidance when you feel confused, emotionally overwhelmed, or unsure about your next step."
      image="/assets/images/service-tarot.png"
      benefits={["Relationship insights", "Career and life path clarity", "Decision support without fear"]}
      highlights={[
        {
          title: "Question-based reading",
          text: "Bring your specific situation and receive focused card guidance with grounded interpretation.",
        },
        {
          title: "Emotionally safe approach",
          text: "No fear-based predictions. Every reading is held with compassion, clarity, and respect.",
        },
        {
          title: "Actionable takeaways",
          text: "You leave with practical next steps aligned with your intuition and current reality.",
        },
      ]}
      process={[
        { title: "Intention setting", text: "We begin with your key question and desired outcome for the session." },
        { title: "Reading and insight", text: "Cards are interpreted in context of your present phase and challenge." },
        { title: "Integration", text: "We close with clear guidance and a simple plan for your next move." },
      ]}
      videos={[
        { title: "The Beginner's Guide to Tarot", embedUrl: "https://www.youtube.com/embed/fM1t1wW7-zM" },
        { title: "How Tarot Actually Works", embedUrl: "https://www.youtube.com/embed/W-8Y6Z6V_q4" }
      ]}
    />
  );
}
