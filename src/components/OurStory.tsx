"use client";

import { motion } from "framer-motion";

const stories = [
  {
    icon: "✦",
    year: "2019",
    title: "Первая встреча",
    text: "Судьба свела нас на одном из уютных московских вечеров. С первого взгляда мы поняли, что эта встреча изменит всё. Разговор не прекращался до самого рассвета.",
  },
  {
    icon: "♡",
    year: "2022",
    title: "Наши путешествия",
    text: "Мы объездили полмира вдвоём: горы Грузии, улицы Праги, побережье Италии. Каждое путешествие открывало нас друг другу с новой стороны и делало нас сильнее.",
  },
  {
    icon: "◇",
    year: "2025",
    title: "Предложение",
    text: "Солнечным весенним утром на берегу тихого озера Никита опустился на колено. Слёзы радости, счастливый смех и одно маленькое слово «Да» — начало новой главы нашей истории.",
  },
];

export default function OurStory() {
  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 24px",
        background: "#FFF8F0",
        textAlign: "center",
      }}
    >
      {/* Section heading */}
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
          Наш путь
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
          Наша история
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

      {/* Story cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(20px, 3vw, 36px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {stories.map((story, index) => (
          <motion.div
            key={story.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "clamp(28px, 4vw, 48px) clamp(24px, 3vw, 40px)",
              border: "1px solid rgba(201, 149, 108, 0.15)",
              boxShadow: "0 4px 24px rgba(107, 45, 62, 0.06)",
              textAlign: "center",
              cursor: "default",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FFF8F0, #f5e6da)",
                border: "1px solid rgba(201, 149, 108, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
                fontSize: "22px",
                color: "#C9956C",
              }}
            >
              {story.icon}
            </div>

            {/* Year badge */}
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                color: "#C9956C",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "0.75rem",
                background: "rgba(201, 149, 108, 0.08)",
                padding: "4px 14px",
                borderRadius: "20px",
              }}
            >
              {story.year}
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 500,
                color: "#6B2D3E",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {story.title}
            </h3>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, #D4A5A5, transparent)",
                margin: "0 auto 1.25rem",
                maxWidth: "80px",
              }}
            />

            {/* Text */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(13px, 1.8vw, 15px)",
                color: "#7a5565",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              {story.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
