"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    setVisible(true);

    // Start fading out after 1 second
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Remove from DOM completely after fade transition (600ms)
      setTimeout(() => setVisible(false), 600);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(18, 22, 28, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "all" : "none",
      }}
    >
      <div className="orbit-spinner"></div>
      <style jsx>{`
        .orbit-spinner {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: var(--primary-color, #8e4a6f);
          border-bottom-color: var(--accent-color, #e2a6a1);
          animation: spin 1.5s cubic-bezier(0.68, -0.2, 0.265, 1.2) infinite;
          position: relative;
        }
        .orbit-spinner::before {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-left-color: var(--accent-color, #e2a6a1);
          border-right-color: var(--primary-color, #8e4a6f);
          animation: spin 1s linear infinite reverse;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
