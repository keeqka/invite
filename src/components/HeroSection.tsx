"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  width: string;
  height: string;
  reverse: boolean;
  color: string;
}

const PETAL_COLORS = [
  "radial-gradient(ellipse at 30% 30%, #e8b4b8, #d4a5a5)",
  "radial-gradient(ellipse at 30% 30%, #c9956c88, #d4a5a5)",
  "radial-gradient(ellipse at 30% 30%, #f2cece, #d4a5a5cc)",
  "radial-gradient(ellipse at 30% 30%, #e8c4c4, #c9956c88)",
];

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${6 + Math.random() * 8}s`,
    animationDelay: `${Math.random() * 8}s`,
    width: `${8 + Math.random() * 10}px`,
    height: `${12 + Math.random() * 14}px`,
    reverse: Math.random() > 0.5,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
  }));
}

export default function HeroSection() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(generatePetals(24));
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #FFF8F0 0%, #f5e6da 40%, #D4A5A5 100%)",
      }}
    >
      {/* Floating petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`petal${petal.reverse ? " petal-reverse" : ""}`}
          style={{
            left: petal.left,
            top: "-5%",
            width: petal.width,
            height: petal.height,
            background: petal.color,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
          }}
        />
      ))}

      {/* Decorative circles */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(201, 149, 108, 0.2)",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "800px",
          height: "800px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(201, 149, 108, 0.1)",
          pointerEvents: "none",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* "Save the date" eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(10px, 1.5vw, 13px)",
            color: "#C9956C",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: "1.5rem",
          }}
        >
          Свадебное приглашение
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9956C, transparent)",
            maxWidth: "200px",
            margin: "0 auto 2rem",
          }}
        />

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 300,
            color: "#6B2D3E",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          Никита
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "backOut" }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#C9956C",
            marginBottom: "0.5rem",
          }}
        >
          &amp;
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 300,
            color: "#6B2D3E",
            lineHeight: 1,
            marginBottom: "2rem",
          }}
        >
          Анастасия
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9956C, transparent)",
            maxWidth: "300px",
            margin: "0 auto 2rem",
          }}
        />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#6B2D3E",
            marginBottom: "0.75rem",
          }}
        >
          15 Августа 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(11px, 1.8vw, 14px)",
            color: "#9a6a7a",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Тбилиси, Грузия
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          style={{ marginTop: "3rem" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <div
              style={{
                width: "30px",
                height: "50px",
                border: "2px solid rgba(201, 149, 108, 0.5)",
                borderRadius: "15px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "10px",
                  background: "#C9956C",
                  borderRadius: "2px",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
