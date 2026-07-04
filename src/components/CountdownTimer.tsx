"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-08-15T12:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          background: "white",
          border: "1px solid rgba(201, 149, 108, 0.3)",
          borderRadius: "12px",
          padding: "clamp(16px, 3vw, 28px) clamp(20px, 4vw, 40px)",
          minWidth: "clamp(70px, 14vw, 120px)",
          boxShadow: "0 4px 24px rgba(107, 45, 62, 0.06)",
          backdropFilter: "blur(4px)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 300,
            color: "#6B2D3E",
            lineHeight: 1,
            display: "block",
            textAlign: "center",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(9px, 1.5vw, 12px)",
          color: "#C9956C",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: "10px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 24px",
        background: "linear-gradient(160deg, #f8ede6 0%, #FFF8F0 100%)",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(10px, 1.5vw, 12px)",
            color: "#C9956C",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          До свадьбы осталось
        </p>

        {/* Decorative line */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9956C, transparent)",
            maxWidth: "150px",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Countdown grid */}
        {mounted ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "clamp(8px, 2vw, 20px)",
              flexWrap: "wrap",
            }}
          >
            <TimeUnit value={timeLeft.days} label="Дней" />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 6vw, 64px)",
                color: "#C9956C",
                lineHeight: 1,
                paddingTop: "clamp(14px, 2.5vw, 22px)",
                fontWeight: 300,
              }}
            >
              :
            </div>
            <TimeUnit value={timeLeft.hours} label="Часов" />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 6vw, 64px)",
                color: "#C9956C",
                lineHeight: 1,
                paddingTop: "clamp(14px, 2.5vw, 22px)",
                fontWeight: 300,
              }}
            >
              :
            </div>
            <TimeUnit value={timeLeft.minutes} label="Минут" />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 6vw, 64px)",
                color: "#C9956C",
                lineHeight: 1,
                paddingTop: "clamp(14px, 2.5vw, 22px)",
                fontWeight: 300,
              }}
            >
              :
            </div>
            <TimeUnit value={timeLeft.seconds} label="Секунд" />
          </div>
        ) : (
          <div style={{ height: "120px" }} />
        )}

        {/* Date reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            fontStyle: "italic",
            color: "#9a6a7a",
            marginTop: "2.5rem",
          }}
        >
          15 Августа 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
