"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// NOTE: Replace this with your actual Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxjkxBTlh3Yx0zxvQ29ZxXpTskXZ6NeYFTfRFPTUtaQ6A_GiNkFXVTfwdJOwwvB97AL/exec";

const SERVICES = [
  {
    id: "priority_dm",
    title: "Priority DM",
    shortDesc: "Welcome! Ask me anything about your healing journey 🌸",
    longDesc: "Have a quick question or need some brief guidance? Send me a priority DM and I will thoughtfully reply within 2 days.",
    price: "FREE",
    durationText: "2 days reply",
    durationMins: 0,
    icon: "💬",
  },
  {
    id: "clarity_call",
    title: "Clarity Call - Where Do I Begin?",
    shortDesc: "Not sure where to start? Let's figure it out together 🌸",
    longDesc: "Not sure which healing modality is right for you? This is your starting point. In this short call, we identify what's weighing on you emotionally, mentally, or energetically and figure out the best path forward together. No prior experience needed. Just come as you are.",
    price: "₹599",
    durationText: "15 mins",
    durationMins: 15,
    icon: "✨",
    popular: true,
  },
  {
    id: "focused_healing",
    title: "Focused Healing Session",
    shortDesc: "A focused session to work through what's on your mind ✨",
    longDesc: "Connect 1:1 with a dedicated session to work through a specific concern — whether it's relationship clarity, career confusion, emotional heaviness, or energy imbalance. We go deeper than the clarity call, with targeted intuitive healing or reading based on your needs.",
    price: "₹1,100",
    durationText: "40 mins",
    durationMins: 40,
    icon: "🌿",
  },
  {
    id: "deep_dive",
    title: "Deep Dive - Full Healing Session",
    shortDesc: "Ready to go deep? Let's heal from the root, together 🌀",
    longDesc: "The most comprehensive session — for those ready to go deep. We work through root causes, energetic blockages, soul-level patterns, or past life influences. Ideal for complex situations, emotional healing, or deep transformation. This is a fully immersive, personalized experience.",
    price: "₹2,999",
    durationText: "90 mins",
    durationMins: 90,
    icon: "🔮",
  }
];

export default function BookingClient() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  
  // Calendar State
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setAvailableTimes([]);
  };

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    
    // Fetch available times from Google Sheets
    if (SCRIPT_URL && SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
      setIsLoadingTimes(true);
      try {
        const formattedDate = date.toLocaleDateString('en-CA'); // YYYY-MM-DD format for consistency
        const res = await fetch(`${SCRIPT_URL}?action=getSlots&date=${formattedDate}`);
        const data = await res.json();
        
        if (data.status === 'success' && data.slots) {
          setAvailableTimes(data.slots);
        } else {
          setAvailableTimes([]);
        }
      } catch (err) {
        console.error("Error fetching slots:", err);
        alert("Could not load available times. Please check your connection.");
      } finally {
        setIsLoadingTimes(false);
      }
    } else {
      // Fallback if URL is not configured yet
      setAvailableTimes(["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"]);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        action: 'book',
        service: selectedService.title,
        price: selectedService.price,
        duration: selectedService.durationText,
        date: selectedDate ? selectedDate.toLocaleDateString('en-CA') : 'N/A',
        time: selectedTime || 'N/A',
        ...formData
      };

      if (SCRIPT_URL && SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.status === 'success') {
          setStep(3);
        } else {
          alert("Error saving booking: " + result.message);
        }
      } else {
        // Fallback simulate success
        setTimeout(() => setStep(3), 1500);
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // -------------------------------------------------------------
  // STEP 0: SERVICE SELECTION
  // -------------------------------------------------------------
  if (step === 0) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "25px" }}>
        {SERVICES.map((s) => (
          <div key={s.id} className="booking-card" onClick={() => handleServiceSelect(s)}>
            <div style={{ color: "#666", fontSize: "0.9rem", marginBottom: "15px" }}>
              {s.durationMins > 0 ? `Video meeting . ${s.durationText}` : s.durationText}
            </div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
              {s.icon} {s.title}
            </h3>
            <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "40px", flexGrow: 1 }}>{s.shortDesc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee", paddingTop: "20px" }}>
              <span style={{ fontWeight: "700", fontSize: "1.2rem", color: "var(--text-color)" }}>{s.price}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                {s.popular && (
                  <span style={{ background: "#e8f0fe", color: "#1a73e8", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "600" }}>Popular</span>
                )}
                <div style={{ width: "32px", height: "32px", background: "#000", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>→</div>
              </div>
            </div>
          </div>
        ))}
        <style jsx>{`
          .booking-card { background: #fff; border: 1px solid #eaeaea; border-radius: 20px; padding: 30px; cursor: pointer; transition: all 0.3s ease; display: flex; flex-direction: column; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
          .booking-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: #d0d0d0; }
        `}</style>
      </div>
    );
  }

  // Handle DM jump
  if (step === 1 && selectedService.durationMins === 0) {
    setStep(2);
    return null;
  }

  // -------------------------------------------------------------
  // STEP 1: CALENDAR & TIME
  // -------------------------------------------------------------
  if (step === 1 && selectedService.durationMins > 0) {
    return (
      <div className="booking-modal">
        <button onClick={handleBack} className="back-btn">← Back</button>
        <div className="booking-split">
          <div className="booking-left">
            <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
              {selectedService.icon} {selectedService.title}
            </h2>
            <div style={{ display: "flex", gap: "30px", marginBottom: "30px", paddingBottom: "20px", borderBottom: "1px solid #eee" }}>
              <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>{selectedService.price}</div>
              <div style={{ color: "#666", display: "flex", alignItems: "center", gap: "8px" }}><span>⏱</span> {selectedService.durationText}</div>
            </div>
            <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.05rem" }}>{selectedService.longDesc}</p>
          </div>
          
          <div className="booking-right">
            <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>When should we meet?</h3>
            <div className="calendar-container">
              <Calendar 
                onChange={handleDateChange} 
                value={selectedDate}
                minDate={new Date()}
                className="custom-calendar"
                prev2Label={null}
                next2Label={null}
              />
            </div>

            {selectedDate && (
              <div style={{ marginTop: "30px" }}>
                <h4 style={{ marginBottom: "15px", fontSize: "0.95rem", color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Available times for {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </h4>
                
                {isLoadingTimes ? (
                  <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Loading available slots...</div>
                ) : availableTimes.length > 0 ? (
                  <div className="time-grid">
                    {availableTimes.map((time, i) => (
                      <div key={i} className="time-box" onClick={() => handleTimeSelect(time)}>{time}</div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: "20px", textAlign: "center", background: "#f9f9f9", borderRadius: "8px", color: "#888" }}>
                    No slots available on this date.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <style jsx global>{`
          .booking-modal { background: #fff; border-radius: 24px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
          .back-btn { background: none; border: none; color: #666; cursor: pointer; font-size: 1rem; margin-bottom: 30px; font-weight: 500; }
          .booking-split { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; }
          @media (max-width: 768px) { .booking-split { grid-template-columns: 1fr; gap: 40px; } .booking-modal { padding: 20px; } }
          
          /* Custom Calendar Styles */
          .calendar-container { padding: 15px; border: 1px solid #eaeaea; border-radius: 16px; background: #fff; }
          .custom-calendar { width: 100%; border: none !important; font-family: inherit; }
          .react-calendar__navigation button { min-width: 44px; background: none; font-size: 1.2rem; margin-top: 8px; border-radius: 8px; }
          .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus { background-color: #fdf5f2; }
          .react-calendar__month-view__weekdays { text-transform: uppercase; font-weight: 600; font-size: 0.8rem; color: #888; }
          .react-calendar__month-view__weekdays__weekday abbr { text-decoration: none; }
          .react-calendar__tile { padding: 16px 8px; border-radius: 8px; font-size: 1rem; transition: 0.2s; }
          .react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus { background-color: #fdf5f2; color: var(--primary-color); border-radius: 8px; }
          .react-calendar__tile--now { background: #f0f0f0; border-radius: 8px; }
          .react-calendar__tile--active { background: var(--primary-color) !important; color: white !important; font-weight: bold; border-radius: 8px; }
          .react-calendar__tile:disabled { background-color: transparent; color: #ccc; }

          .time-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; }
          .time-box { padding: 14px; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center; cursor: pointer; font-size: 0.95rem; font-weight: 500; transition: all 0.2s; color: var(--primary-color); }
          .time-box:hover { border-color: var(--primary-color); background: #fdf5f2; }
        `}</style>
      </div>
    );
  }

  // -------------------------------------------------------------
  // STEP 2: DETAILS FORM
  // -------------------------------------------------------------
  if (step === 2) {
    return (
      <div className="booking-modal" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <button onClick={handleBack} className="back-btn">← Back</button>
        <h2 style={{ marginBottom: "10px" }}>Your Details</h2>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Booking: <strong>{selectedService.title}</strong><br/>
          {selectedService.durationMins > 0 && (
            <>Date & Time: <strong>{selectedDate?.toDateString()} at {selectedTime}</strong></>
          )}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group"><label>Full Name *</label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /></div>
          <div className="form-group"><label>Email Address *</label><input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
          <div className="form-group"><label>Phone Number / WhatsApp</label><input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} /></div>
          <div className="form-group"><label>Please share anything you'd like me to know before the session</label><textarea rows="4" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}></textarea></div>
          
          {SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE" && (
            <div style={{ padding: "15px", background: "#fff3cd", color: "#856404", borderRadius: "8px", marginBottom: "20px", fontSize: "0.9rem" }}>
              <strong>Notice:</strong> Google Webhook URL is not set. The form will visually complete but won't save to the spreadsheet.
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>{isSubmitting ? "Confirming..." : "Confirm Booking"}</button>
        </form>

        <style jsx>{`
          .booking-modal { background: #fff; border-radius: 24px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
          .back-btn { background: none; border: none; color: #666; cursor: pointer; margin-bottom: 20px; font-weight: 500;}
          .form-group { margin-bottom: 20px; }
          label { display: block; margin-bottom: 8px; font-size: 0.95rem; color: #444; font-weight: 500; }
          input, textarea { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-family: inherit; font-size: 1rem;}
          input:focus, textarea:focus { border-color: var(--primary-color); outline: none; }
          .submit-btn { background: var(--primary-color); color: #fff; border: none; width: 100%; padding: 16px; font-size: 1.1rem; border-radius: 8px; cursor: pointer; font-weight: 600; margin-top: 10px; transition: 0.3s; }
          .submit-btn:hover { opacity: 0.9; }
          .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        `}</style>
      </div>
    );
  }

  // -------------------------------------------------------------
  // STEP 3: SUCCESS
  // -------------------------------------------------------------
  if (step === 3) {
    return (
      <div className="booking-modal" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "60px 40px" }}>
        <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🌸</div>
        <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: "var(--primary-color)" }}>Booking Confirmed!</h2>
        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
          Thank you, {formData.name}. Your session has been successfully scheduled. 
          We have received your details and will contact you shortly.
        </p>
        <button onClick={() => setStep(0)} style={{ background: "transparent", border: "2px solid var(--primary-color)", color: "var(--primary-color)", padding: "10px 24px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
          Book Another Session
        </button>
      </div>
    );
  }

  return null;
}
