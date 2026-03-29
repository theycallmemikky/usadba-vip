"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Наверх"
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full transition-all duration-400"
      style={{
        background: "var(--color-gold)",
        color: "#ffffff",
        boxShadow: "0 4px 20px rgba(95,125,140,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <ChevronUp size={20} />
    </button>
  );
}
