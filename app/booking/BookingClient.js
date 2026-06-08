"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  getCountries,
  getCountryCallingCode,
  formatIncompletePhoneNumber,
  parseIncompletePhoneNumber,
  validatePhoneNumberLength,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';

// NOTE: Replace this with your actual Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxjkxBTlh3Yx0zxvQ29ZxXpTskXZ6NeYFTfRFPTUtaQ6A_GiNkFXVTfwdJOwwvB97AL/exec";

function buildCountryOptions() {
  let regionNames;
  try {
    regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
  } catch (e) {
    // Fallback if Intl is not available
    regionNames = { of: (c) => c };
  }

  return getCountries()
    .map((code) => {
      let dial, fullName;
      try { 
        dial = getCountryCallingCode(code); 
        fullName = regionNames.of(code);
      } catch { return null; }
      return { code, dial, label: `${fullName} (+${dial})` };
    })
    .filter(Boolean)
    .sort((a, b) => a.label.localeCompare(b.label, 'en'));
}

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
  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countryOptions = useMemo(() => buildCountryOptions(), []);
  const [country, setCountry] = useState('IN');
  const [nationalInput, setNationalInput] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);

  const onNationalChange = useCallback((e) => {
    const raw = e.target.value;
    let nextDigits = parseIncompletePhoneNumber(raw);
    while (nextDigits.length > 0 && validatePhoneNumberLength(nextDigits, country) === 'TOO_LONG') {
      nextDigits = nextDigits.slice(0, -1);
    }
    setNationalInput(formatIncompletePhoneNumber(nextDigits, country));
  }, [country]);

  const onCountryChange = useCallback((e) => {
    const next = e.target.value;
    setCountry(next);
    setNationalInput((prev) => {
      const d = parseIncompletePhoneNumber(prev);
      return d ? formatIncompletePhoneNumber(d, next) : '';
    });
  }, []);

  const digits = useMemo(() => parseIncompletePhoneNumber(nationalInput), [nationalInput]);
  const phoneValid = useMemo(() => {
    if (!digits) return false;
    return isValidPhoneNumber(digits, country);
  }, [digits, country]);
  
  // Add browser back button & initial load support
  useEffect(() => {
    const handleUrlState = () => {
      const path = window.location.pathname;
      const parts = path.split('/').filter(Boolean); // e.g. ['booking', 'clarity-call', 'calendar']
      
      if (parts.length >= 2 && parts[0] === 'booking') {
        const slug = parts[1];
        const foundService = SERVICES.find(s => s.id.replace(/_/g, '-') === slug);
        if (foundService) {
          setSelectedService(foundService);
          const currentTab = parts[2] || '';
          if (currentTab === 'details') {
            setStep(2);
          } else if (currentTab === 'calendar' || currentTab === '') {
            setStep(foundService.durationMins === 0 ? 2 : 1);
          } else {
            setStep(0);
          }
          return;
        }
      }
      // Default to start
      setStep(0);
      setSelectedService(null);
    };

    // Run once on mount to handle direct links / refreshes
    handleUrlState();

    window.addEventListener('popstate', handleUrlState);
    return () => window.removeEventListener('popstate', handleUrlState);
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    const slug = service.id.replace(/_/g, '-');
    if (service.durationMins === 0) {
      setStep(2); // Jump to form
      window.history.pushState(null, '', `/booking/${slug}/details`);
    } else {
      setStep(1); // Go to calendar
      window.history.pushState(null, '', `/booking/${slug}/calendar`);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(2);
    const slug = selectedService.id.replace(/_/g, '-');
    window.history.pushState(null, '', `/booking/${slug}/details`);
  };

  const handleBackToServices = () => {
    setStep(0);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setAvailableTimes([]);
    window.history.pushState(null, '', '/booking');
  };

  const handleBackToCalendar = () => {
    setStep(1);
    setSelectedTime(null);
    const slug = selectedService.id.replace(/_/g, '-');
    window.history.pushState(null, '', `/booking/${slug}/calendar`);
  };

  const lengthStatus = useMemo(() => {
    if (!digits) return undefined;
    return validatePhoneNumberLength(digits, country);
  }, [digits, country]);

  const phoneError = phoneTouched && Boolean(digits) && !phoneValid;

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    
    // Fetch available times from Google Sheets
    if (SCRIPT_URL && SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
      setIsLoadingTimes(true);
      try {
        const formattedDate = date.toLocaleDateString('en-CA'); // YYYY-MM-DD format for consistency
        const serviceParam = selectedService ? selectedService.id : "";
        
        // Fetch with a small artificial delay so the beautiful skeleton loader is actually visible
        const [res] = await Promise.all([
          fetch(`${SCRIPT_URL}?action=getSlots&date=${formattedDate}&serviceId=${serviceParam}`),
          new Promise(resolve => setTimeout(resolve, 800))
        ]);
        
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



  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    
    if (!phoneValid || !digits) {
      alert("Please enter a valid mobile number for the selected country.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      let fullPhone = '';
      if (nationalInput) {
        const digits = parseIncompletePhoneNumber(nationalInput);
        fullPhone = `${getCountryCallingCode(country)}${digits}`;
      }

      const payload = {
        action: 'book',
        service: selectedService.title,
        price: selectedService.price,
        duration: selectedService.durationText,
        date: selectedDate ? selectedDate.toLocaleDateString('en-CA') : 'N/A',
        time: selectedTime || 'N/A',
        phone: fullPhone,
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
      <div className="service-grid">
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
        <div style={{ gridColumn: "1 / -1", textAlign: "center", marginTop: "10px", padding: "24px", background: "#fcfaf8", border: "1px dashed #d1c1b5", borderRadius: "16px", color: "#555" }}>
           <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "8px" }}>🔒</span>
           <strong style={{ color: "var(--primary-color)", fontSize: "1.1rem" }}>Book your session now, pay later!</strong><br/>
           <span style={{ fontSize: "0.95rem", lineHeight: "1.6", display: "block", marginTop: "5px" }}>There are absolutely no pre-booking charges. You will only pay the amount after your session is fully complete.</span>
        </div>
        <style jsx>{`
          .service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
          @media (max-width: 768px) { .service-grid { grid-template-columns: 1fr; } }
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
            <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", wordBreak: "break-word" }}>
              <span>{selectedService.icon}</span> <span>{selectedService.title}</span>
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
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "12px" }}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div key={n} style={{ height: "72px", width: "100%", borderRadius: "8px", background: "#e0e0e0", animation: "pulse 1.5s infinite" }}></div>
                    ))}
                  </div>
                ) : availableTimes.length > 0 ? (
                  <div className="time-grid">
                    {availableTimes.map((slotItem, i) => {
                      // Handle backward compatibility
                      const isObject = typeof slotItem === 'object' && slotItem !== null;
                      const rawTime = isObject ? slotItem.time : slotItem;
                      const status = isObject ? slotItem.status : 'available';

                      // Extract exact time from ANY Google sheets raw string (e.g., SAT DEC 30 1899 21:45:00 GMT...)
                      let displayTime = rawTime;
                      if (typeof rawTime === 'string') {
                        const timeRegexMatch = rawTime.match(/(\d{1,2}):(\d{2}):(\d{2})/);
                        if (timeRegexMatch && (rawTime.includes('1899') || rawTime.includes('GMT'))) {
                          let h = parseInt(timeRegexMatch[1], 10);
                          const m = timeRegexMatch[2];
                          const ampm = h >= 12 ? 'PM' : 'AM';
                          h = h % 12 || 12;
                          const hStr = h.toString().padStart(2, '0');
                          displayTime = `${hStr}:${m} ${ampm}`;
                        } else if (timeRegexMatch && rawTime.includes('T')) {
                           // Handle ISO strings correctly
                           let h = parseInt(timeRegexMatch[1], 10);
                           const m = timeRegexMatch[2];
                           const ampm = h >= 12 ? 'PM' : 'AM';
                           h = h % 12 || 12;
                           const hStr = h.toString().padStart(2, '0');
                           displayTime = `${hStr}:${m} ${ampm}`;
                        }
                      }

                      // Check if time is in the past for TODAY
                      let isPast = false;
                      const now = new Date();
                      if (selectedDate.toDateString() === now.toDateString()) {
                        try {
                          const timeMatch = displayTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
                          if (timeMatch) {
                            let hours = parseInt(timeMatch[1]);
                            const minutes = parseInt(timeMatch[2]);
                            const modifier = timeMatch[3].toUpperCase();
                            if (modifier === 'PM' && hours < 12) hours += 12;
                            if (modifier === 'AM' && hours === 12) hours = 0;
                            
                            const slotDate = new Date(now);
                            slotDate.setHours(hours, minutes, 0, 0);
                            
                            if (slotDate < now) {
                              isPast = true;
                            }
                          }
                        } catch (e) {
                          console.error("Error parsing time for past check", e);
                        }
                      }

                      if (isPast) return null; // Don't show past times

                      const isBooked = status === 'booked';

                      return (
                        <div 
                          key={i} 
                          className={`time-box ${isBooked ? 'booked' : ''}`} 
                          onClick={() => !isBooked && handleTimeSelect(displayTime)}
                        >
                          {displayTime}
                          {isBooked && <div style={{ fontSize: "0.75rem", marginTop: "4px", color: "#999", fontWeight: "normal" }}>Booked</div>}
                        </div>
                      );
                    })}
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
          @media (max-width: 768px) { 
            .booking-split { grid-template-columns: 1fr; gap: 30px; } 
            .booking-modal { padding: 24px 16px !important; width: 100%; box-sizing: border-box; overflow-x: hidden; } 
            .booking-left h2 { font-size: 1.4rem !important; flex-wrap: wrap; word-break: break-word; }
            .booking-left p { font-size: 0.95rem !important; line-height: 1.6 !important; word-break: break-word; }
            .calendar-container { padding: 10px !important; overflow-x: hidden; }
            .time-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
            .time-box { font-size: 0.9rem !important; min-height: 60px !important; padding: 6px !important; }
          }
          
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
          .time-box { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 72px; padding: 10px; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center; cursor: pointer; font-size: 1rem; font-weight: 500; transition: all 0.2s; color: var(--primary-color); }
          .time-box:hover:not(.booked) { border-color: var(--primary-color); background: #fdf5f2; }
          .time-box.booked { opacity: 0.6; cursor: not-allowed; background: #f5f5f5; border-color: #ddd; color: #888; }
          
          @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
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
          
          <div className="form-group">
            <label>Phone Number / WhatsApp *</label>
            <div className="phone-wrapper">
              <select
                value={country}
                onChange={onCountryChange}
                className="country-select"
              >
                {countryOptions.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="National number"
                value={nationalInput}
                onChange={onNationalChange}
                onBlur={() => setPhoneTouched(true)}
                className="national-input"
                style={{ borderColor: phoneError ? '#d32f2f' : '#ccc' }}
              />
            </div>
            {phoneError && (
              <div className="field-error">
                {lengthStatus === 'TOO_SHORT' ? 'Number is too short' : lengthStatus === 'TOO_LONG' ? 'Number is too long' : 'Invalid phone number for this country'}
              </div>
            )}
          </div>

          <div className="form-group"><label>Please share anything you'd like me to know before the session</label><textarea rows="4" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}></textarea></div>
          
          <div className="pay-later-banner">
            <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "8px" }}>🔒</span>
            <strong>Book now, pay later.</strong><br/>
            <span>Zero upfront payment required. You will pay only after your session is complete.</span>
          </div>

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
          .form-group label { display: block; margin-bottom: 8px; font-weight: 500; color: #444; font-size: 0.95rem; }
          .form-group input, .form-group textarea { width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-family: inherit; font-size: 1rem; background: #fafafa; transition: border-color 0.2s; }
          .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--primary-color); background: #fff; }
          .submit-btn { background: var(--primary-color); color: #fff; border: none; padding: 16px; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: all 0.2s; font-family: inherit; margin-top: 10px; width: 100%; }
          .submit-btn:hover { opacity: 0.9; }
          .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

          /* Phone input CSS */
          .phone-wrapper { display: flex; gap: 10px; }
          .country-select { width: 180px; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-family: inherit; font-size: 0.95rem; background: #fff; text-overflow: ellipsis; }
          .national-input { flex: 1; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-family: inherit; font-size: 1rem; width: 100%; }
          .field-error { color: #d32f2f; font-size: 0.85rem; margin-top: 6px; font-weight: 500; }

          /* Banner */
          .pay-later-banner { text-align: center; margin-bottom: 25px; padding: 20px; background: #fcfaf8; border-radius: 12px; border: 1px dashed #d1c1b5; color: #555; font-size: 0.95rem; line-height: 1.5; }
          .pay-later-banner strong { color: var(--primary-color); font-size: 1.05rem; }

          @media (max-width: 480px) {
            .phone-wrapper { flex-direction: column; }
            .country-select { width: 100%; }
          }
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
