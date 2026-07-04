"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #6B2D3E 0%, #4a1f2b 100%)",
        padding: "clamp(48px, 8vw, 96px) 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(201, 149, 108, 0.15)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-60px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          border: "1px solid rgba(201, 149, 108, 0.1)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Divider top */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201, 149, 108, 0.5), transparent)",
            maxWidth: "300px",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Names */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#FFF8F0",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}
        >
          Иван &amp; Мария
        </p>

        {/* Heart */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            color: "#D4A5A5",
            marginBottom: "1.5rem",
          }}
        >
          ♡
        </motion.div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(11px, 1.8vw, 14px)",
            color: "rgba(255, 248, 240, 0.65)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          С любовью, Иван &amp; Мария ♡
        </p>

        {/* Date */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "rgba(201, 149, 108, 0.8)",
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
        >
          15 Августа 2026
        </p>

        {/* Divider bottom */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201, 149, 108, 0.3), transparent)",
            maxWidth: "200px",
            margin: "0 auto 1.5rem",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            color: "rgba(255, 248, 240, 0.3)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Тбилиси, Грузия &bull; 2026
        </p>
      </motion.div>
    </footer>
  );
}
