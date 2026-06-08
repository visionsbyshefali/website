import BookingClient from "./BookingClient";

export const metadata = {
  title: "Book a Session | Visions By Shefali",
  description: "Schedule your intuitive reading, crystal healing, or deep dive session with Shefali Soni.",
};

export default function BookingPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fdf5f2", padding: "120px 20px" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontFamily: "var(--heading-font)", fontSize: "2.5rem", color: "var(--primary-color)" }}>
            Book Your Session
          </h1>
          <p style={{ color: "#666", fontSize: "1.1rem", marginTop: "15px" }}>
            Select a service below to schedule your confidential 1:1 online session.
          </p>
        </div>
        
        <BookingClient />
      </div>
    </main>
  );
}
