"use client";

import { motion } from "framer-motion";

const details = [
  {
    type: "Церемония",
    icon: "⚘",
    time: "12:00",
    venue: "Ресторан «Калакши»",
    address: "Тбилиси, Грузия",
    note: "Просим прибыть за 20 минут до начала",
    color: "#D4A5A5",
    bg: "linear-gradient(135deg, #fff8f8, #fdf0ee)",
  },
  {
    type: "Банкет",
    icon: "♔",
    time: "15:00",
    venue: "Ресторан «Калакши»",
    address: "Тбилиси, Грузия",
    note: "Фуршет начинается в 14:30",
    color: "#8FAF8F",
    bg: "linear-gradient(135deg, #f5faf5, #eef6ee)",
  },
];

export default function WeddingDetails() {
  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 24px",
        background: "linear-gradient(160deg, #f8ede6 0%, #fdf5ef 50%, #f0ece8 100%)",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        style={{ marginBottom: "clamp(40px, 7vw, 72px)" }}
      >
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
          Детали торжества
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 300,
            color: "#6B2D3E",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Программа дня
        </h2>
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9956C, transparent)",
            maxWidth: "200px",
            margin: "0 auto",
          }}
        />
      </motion.div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(20px, 3vw, 40px)",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {details.map((item, index) => (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            style={{
              background: item.bg,
              borderRadius: "20px",
              padding: "clamp(32px, 5vw, 52px) clamp(28px, 4vw, 44px)",
              border: `1px solid ${item.color}44`,
              boxShadow: "0 8px 32px rgba(107, 45, 62, 0.08)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background accent */}
            <div
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: `${item.color}18`,
                pointerEvents: "none",
              }}
            />

            {/* Icon */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "white",
                border: `2px solid ${item.color}66`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontSize: "28px",
                color: item.color,
                boxShadow: `0 4px 16px ${item.color}33`,
              }}
            >
              {item.icon}
            </div>

            {/* Type badge */}
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                color: item.color,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              {item.type}
            </span>

            {/* Time */}
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 8vw, 72px)",
                fontWeight: 300,
                color: "#6B2D3E",
                lineHeight: 1,
                marginBottom: "1.25rem",
              }}
            >
              {item.time}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${item.color}88, transparent)`,
                margin: "0 auto 1.25rem",
                maxWidth: "100px",
              }}
            />

            {/* Venue */}
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 500,
                color: "#6B2D3E",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
              }}
            >
              {item.venue}
            </h3>

            {/* Address */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(12px, 1.8vw, 14px)",
                color: "#9a6a7a",
                marginBottom: "1rem",
                fontWeight: 300,
              }}
            >
              {item.address}
            </p>

            {/* Note */}
            <div
              style={{
                background: "rgba(255,255,255,0.7)",
                borderRadius: "8px",
                padding: "10px 16px",
                display: "inline-block",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  color: "#7a6a5a",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                {item.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map placeholder */}
      <a
        href="https://maps.apple.com/?q=Kalakshi+Restaurant+Tbilisi&ll=41.6938,44.8015&z=16"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none", cursor: "pointer" }}
      >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.3 }}
        style={{
          maxWidth: "900px",
          margin: "clamp(40px, 6vw, 64px) auto 0",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(201, 149, 108, 0.2)",
          boxShadow: "0 8px 32px rgba(107, 45, 62, 0.08)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #e8ddd5, #d4c8be, #c8bdb5)",
            height: "clamp(220px, 35vw, 380px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid lines mimicking a map */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${(i + 1) * 12.5}%`,
                height: "1px",
                background: "rgba(255,255,255,0.3)",
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={`v-${i}`}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${(i + 1) * 10}%`,
                width: "1px",
                background: "rgba(255,255,255,0.3)",
              }}
            />
          ))}

          {/* Pin */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#6B2D3E",
              borderRadius: "50% 50% 50% 0",
              transform: "rotate(-45deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(107, 45, 62, 0.4)",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "white",
                borderRadius: "50%",
                transform: "rotate(45deg)",
              }}
            />
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "12px",
              padding: "12px 24px",
              textAlign: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                color: "#6B2D3E",
                fontWeight: 500,
              }}
            >
              Тбилиси, Грузия
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                color: "#9a6a7a",
                fontWeight: 300,
              }}
            >
              Откроется в приложении карт
            </p>
          </div>
        </div>
      </motion.div>
      </a>
    </section>
  );
}
