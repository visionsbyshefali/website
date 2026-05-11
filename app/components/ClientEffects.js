"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section, .treatment-card").forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
