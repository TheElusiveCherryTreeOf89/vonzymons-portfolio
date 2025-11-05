// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", hp: "" });
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
    if (form.hp) { setStatus("success"); return; } // honeypot
    const e = validate(); setErrors(e); if (Object.keys(e).length) return;
    setStatus("sending");
    // mailto fallback
    try {
      const subject = encodeURIComponent(form.subject || "Message from portfolio");
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:you@domain.tld?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", hp: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-transparent px-6 py-12">
      <div className="max-w-4xl mx-auto grid gap-16">

        {/* HERO: Header */}
        <section className="text-center">
          <h1 className="font-pixel text-4xl neon-text mb-3" style={{ color: "var(--neon-pink)" }}>CONTACT</h1>
          <p className="font-term text-sm max-w-2xl mx-auto" style={{ color: "var(--neon-cyan)", lineHeight: 1.6 }}>
            Have a project idea or question? Send a short message and I’ll respond as soon as I can.
          </p>
        </section>

        {/* HERO: Focused form panel (narrower) */}
        <section className="mx-auto w-full max-w-3xl">
          <div className="panel rounded-2xl p-10">
            <form onSubmit={handleSubmit} noValidate>
              <input type="text" name="hp" value={form.hp} onChange={onChange("hp")} style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-pixel text-xs block mb-2" style={{ color: "var(--neon-pink)" }}>Name</label>
                  <input className="w-full panel p-3" value={form.name} onChange={onChange("name")} aria-invalid={!!errors.name} />
                  {errors.name && <div className="font-term text-xs mt-1" style={{ color: "#ffb3c9" }}>{errors.name}</div>}
                </div>

                <div>
                  <label className="font-pixel text-xs block mb-2" style={{ color: "var(--neon-blue)" }}>Email</label>
                  <input className="w-full panel p-3" value={form.email} onChange={onChange("email")} aria-invalid={!!errors.email} />
                  {errors.email && <div className="font-term text-xs mt-1" style={{ color: "#ffb3c9" }}>{errors.email}</div>}
                </div>
              </div>

              <div className="mt-4">
                <label className="font-pixel text-xs block mb-2" style={{ color: "var(--neon-pink)" }}>Subject</label>
                <input className="w-full panel p-3" value={form.subject} onChange={onChange("subject")} />
              </div>

              <div className="mt-4">
                <label className="font-pixel text-xs block mb-2" style={{ color: "var(--neon-pink)" }}>Message</label>
                <textarea className="w-full panel p-3 min-h-[160px]" value={form.message} onChange={onChange("message")} />
                {errors.message && <div className="font-term text-xs mt-1" style={{ color: "#ffb3c9" }}>{errors.message}</div>}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <button type="submit" className="font-pixel px-6 py-3 border-2 rounded" style={{ borderColor: "var(--neon-pink)", color: "var(--neon-pink)" }} disabled={status === "sending"}>
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>

                <div className="font-term text-xs" style={{ color: "var(--neon-cyan)" }}>
                  {status === "success" && <span style={{ color: "var(--accent)" }}>Message sent — thank you!</span>}
                  {status === "error" && <span style={{ color: "#ffb3c9" }}>Something went wrong. Try again later.</span>}
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* HERO: Contact details & socials */}
        <section className="panel rounded-2xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-pixel text-xs mb-2" style={{ color: "var(--neon-blue)" }}>CONTACT INFO</div>
              <div className="font-term text-sm" style={{ color: "var(--neon-cyan)", lineHeight: 1.6 }}>
                <div>Email: <a href="mailto:you@domain.tld" style={{ color: "var(--accent)" }}>you@domain.tld</a></div>
                <div>Availability: Open for freelance</div>
                <div className="mt-2">Timezone: Asia/Manila (UTC+08:00)</div>
              </div>
            </div>

            <div>
              <div className="font-pixel text-xs mb-2" style={{ color: "var(--neon-pink)" }}>SOCIAL</div>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="font-pixel" style={{ color: "var(--neon-pink)" }}>🐙 GitHub</a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="font-pixel" style={{ color: "var(--neon-blue)" }}>in / LinkedIn</a>
                <a href="mailto:you@domain.tld" className="font-pixel" style={{ color: "var(--accent)" }}>✉️ Email</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
