import "./globals.css";
import ClientEffects from "./components/ClientEffects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloater from "./components/WhatsAppFloater";
import PageLoader from "./components/PageLoader";

export const metadata = {
  metadataBase: new URL("https://visionsbyshefali.com"),
  title: {
    default: "Visions By Shefali | Heal, Grow & Thrive",
    template: "%s",
  },
  description:
    "Visions By Shefali offers intuitive guidance, healing modalities, and confidential online sessions with Shefali Soni.",
  keywords: [
    "intuitive healing",
    "tarot session",
    "crystal healing",
    "reiki healing",
    "online healing session",
    "Visions By Shefali",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Visions By Shefali | Heal, Grow & Thrive",
    description:
      "Intuitive guidance and personalized healing sessions with Shefali Soni.",
    type: "website",
    locale: "en_US",
    siteName: "Visions By Shefali",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visions By Shefali | Heal, Grow & Thrive",
    description:
      "Intuitive guidance and personalized healing sessions with Shefali Soni.",
  },
  verification: {
    google: "W6mD7wRXghDbbu4NWXhtXb-8KwupkMEm5JDj7OE8mmU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <ClientEffects />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloater />
      </body>
    </html>
  );
}
