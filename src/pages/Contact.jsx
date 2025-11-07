// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const onChange = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email address.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // honeypot check
    if (form.hp) {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", hp: "" });
      return;
    }

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");
    try {
      const subject = encodeURIComponent(form.subject || "Message from portfolio");
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:bjv.jkv@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", hp: "" });
    } catch {
      setStatus("error");
    }
  };

  const redBarStyle = {
    backgroundColor: "rgba(200,16,46,0.15)",
    color: "#fff",
    fontWeight: 700,
    padding: "10px 12px",
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    border: "3px solid rgb(200,16,46)",
    outline: "none",
    height: 48,
    borderRadius: 0,
    boxSizing: "border-box",
  };

  const framedTextareaStyle = {
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    padding: 16,
    fontFamily: "'Arial', sans-serif",
    fontSize: "0.95rem",
    border: "4px solid rgb(200,16,46)",
    outline: "none",
    resize: "vertical",
    minHeight: 180,
    borderRadius: 0,
    boxSizing: "border-box",
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full" style={{ maxWidth: "850px" }}>
        {/* Page Header */}
        <header className="text-center mb-8">
          <h1
            className="font-justice crt-stutter old-tv neon-text"
            style={{
              fontSize: "2.6rem",
              lineHeight: 1,
              marginBottom: 6,
              color: "var(--neon-pink)",
            }}
            data-text="CONTACT"
          >
            CONTACT
          </h1>

          <p
            className="font-term text-sm sm:text-base"
            style={{ color: "var(--neon-cyan)" }}
          >
            Have a project idea or question? Send a short message and I'll respond as soon as I can.
          </p>
        </header>

        {/* Form Container */}
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          {/* Honeypot */}
          <input
            type="text"
            name="hp"
            value={form.hp}
            onChange={onChange("hp")}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          {/* NAME */}
          <div>
            <div className="font-pixel text-xs" style={{ color: "#fff", backgroundColor: "rgba(200,16,46,0.3)", padding: "8px 12px", fontWeight: 700 }}>
              NAME:
            </div>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange("name")}
              placeholder=""
              className="w-full"
              aria-invalid={!!errors.name}
              style={{ ...redBarStyle, borderTop: "none" }}
            />
            {errors.name && (
              <div className="font-term text-xs mt-1" style={{ color: "#ffb3c9" }}>
                {errors.name}
              </div>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <div className="font-pixel text-xs" style={{ color: "#fff", backgroundColor: "rgba(200,16,46,0.3)", padding: "8px 12px", fontWeight: 700 }}>
              EMAIL:
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange("email")}
              placeholder=""
              className="w-full"
              aria-invalid={!!errors.email}
              style={{ ...redBarStyle, borderTop: "none" }}
            />
            {errors.email && (
              <div className="font-term text-xs mt-1" style={{ color: "#ffb3c9" }}>
                {errors.email}
              </div>
            )}
          </div>

          {/* SUBJECT */}
          <div>
            <div className="font-pixel text-xs" style={{ color: "#fff", backgroundColor: "rgba(200,16,46,0.3)", padding: "8px 12px", fontWeight: 700 }}>
              SUBJECT:
            </div>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={onChange("subject")}
              placeholder=""
              className="w-full"
              style={{ ...redBarStyle, borderTop: "none" }}
            />
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange("message")}
              placeholder="Enter your message here..."
              className="w-full"
              style={framedTextareaStyle}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <div className="font-term text-xs mt-1" style={{ color: "#ffb3c9" }}>
                {errors.message}
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-pixel px-5 py-2 border-4 w-full"
              style={{
                borderColor: "rgb(200,16,46)",
                color: "rgb(200,16,46)",
                background: "transparent",
                textAlign: "center",
                fontSize: "0.9rem",
                borderRadius: 0,
              }}
              aria-live="polite"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="font-term text-sm text-center pt-1" style={{ color: "var(--accent)" }}>
              Message sent — thank you!
            </div>
          )}
          {status === "error" && (
            <div className="font-term text-sm text-center pt-1" style={{ color: "#ffb3c9" }}>
              Error sending message.
            </div>
          )}
        </form>

        {/* SOCIALS */}
        <div className="mt-10 text-center">
          <div className="font-pixel mb-4 text-base sm:text-lg" style={{ color: "var(--neon-pink)" }}>
            SOCIAL LINKS
          </div>
          <div className="flex justify-center gap-8 sm:gap-12">
            <a href="tel:+63927384011" aria-label="Call" className="hover:scale-110 transition-transform" style={{ fontSize: "4rem" }}>📞</a>
            <a href="https://www.instagram.com/bigvjkv_dabloominberries/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform" style={{ fontSize: "4rem" }}>📸</a>
            <a href="https://github.com/TheElusiveCherryTreeOf89" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform" style={{ fontSize: "4rem" }}>💻</a>
            <a href="mailto:bjv.jkv@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform" style={{ fontSize: "4rem" }}>✉️</a>
          </div>
        </div>
      </div>
    </div>
  );
}