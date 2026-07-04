"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  attendance: "yes" | "no" | "";
  guests: string;
  message: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: "10px",
  border: "1px solid rgba(201, 149, 108, 0.3)",
  background: "rgba(255,255,255,0.8)",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "14px",
  color: "#6B2D3E",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "11px",
  color: "#C9956C",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
  fontWeight: 500,
};

export default function RSVPSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("RSVP submitted:", form);
    setSubmitted(true);
  }

  return (
    <section
      id="rsvp"
      style={{
        padding: "clamp(60px, 10vw, 120px) 24px",
        background: "#FFF8F0",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}
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
          Ждём вашего ответа
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
          Подтверждение участия
        </h2>
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9956C, transparent)",
            maxWidth: "200px",
            margin: "0 auto 1.5rem",
          }}
        />
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            color: "#9a6a7a",
            fontWeight: 300,
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Пожалуйста, подтвердите своё присутствие до{" "}
          <strong style={{ color: "#C9956C", fontWeight: 500 }}>1 Июля 2026</strong>
        </p>
      </motion.div>

      {/* Form / Success */}
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              background: "white",
              borderRadius: "24px",
              padding: "clamp(40px, 7vw, 72px) clamp(32px, 5vw, 56px)",
              border: "1px solid rgba(201, 149, 108, 0.2)",
              boxShadow: "0 8px 40px rgba(107, 45, 62, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: "52px",
                marginBottom: "1.25rem",
              }}
            >
              ♡
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 300,
                color: "#6B2D3E",
                marginBottom: "1rem",
              }}
            >
              Спасибо!
            </h3>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                color: "#9a6a7a",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Мы получили ваш ответ и очень рады, что вы будете с нами в этот особенный день. До встречи!
            </p>
            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, #C9956C, transparent)",
                maxWidth: "120px",
                margin: "1.5rem auto 0",
              }}
            />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              background: "white",
              borderRadius: "24px",
              padding: "clamp(32px, 5vw, 56px) clamp(28px, 5vw, 52px)",
              border: "1px solid rgba(201, 149, 108, 0.15)",
              boxShadow: "0 8px 40px rgba(107, 45, 62, 0.08)",
              textAlign: "left",
            }}
          >
            {/* Name */}
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle}>Ваше имя</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="Иван Петров"
                style={{
                  ...inputStyle,
                  borderColor: focused === "name" ? "#C9956C" : "rgba(201, 149, 108, 0.3)",
                }}
              />
            </div>

            {/* Attendance */}
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle}>Вы придёте?</label>
              <div style={{ display: "flex", gap: "12px" }}>
                {(["yes", "no"] as const).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: val })}
                    style={{
                      flex: 1,
                      padding: "13px 16px",
                      borderRadius: "10px",
                      border: `1px solid ${form.attendance === val ? "#C9956C" : "rgba(201,149,108,0.3)"}`,
                      background: form.attendance === val ? "#C9956C" : "rgba(255,255,255,0.8)",
                      color: form.attendance === val ? "white" : "#9a6a7a",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {val === "yes" ? "С радостью!" : "Не смогу"}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests count */}
            {form.attendance === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{ marginBottom: "24px", overflow: "hidden" }}
              >
                <label style={labelStyle}>Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23C9956C' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    paddingRight: "40px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Message */}
            <div style={{ marginBottom: "32px" }}>
              <label style={labelStyle}>Пожелания молодожёнам</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Ваши тёплые слова..."
                rows={4}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "100px",
                  borderColor: focused === "message" ? "#C9956C" : "rgba(201, 149, 108, 0.3)",
                }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(201, 149, 108, 0.35)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #C9956C, #b8845b)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(201, 149, 108, 0.25)",
              }}
            >
              Отправить
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
