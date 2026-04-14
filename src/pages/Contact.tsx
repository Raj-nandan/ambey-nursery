import { useState } from "react";
import { Leaf, MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import contactHero from "@/assets/images/contact-hero.jpg";
import contactSide from "@/assets/images/contact-side.jpg";

/* ── decorative leaf images ─────────────────────────────────────────── */
const HERO_BG = contactHero;
const SIDE_PLANT = contactSide;

/* ── contact detail items ────────────────────────────────────────────────── */
const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Our Nursery",
    lines: [
      "Ambey Nursery, Near Litchi Bagan,",
      "Radhanagar, Kasba",
      "Purnea, Bihar – 854330, India",
    ],
    href: "https://maps.app.goo.gl/8MHVZv9Wtmoy6mL96",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 8210957160", "+91 9934677785"],
    href: null,
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["info@ambeynursery.in"],
    href: "mailto:info@ambeynursery.in",
  },
  {
    icon: Clock,
    label: "Open Hours",
    lines: ["Monday – Sunday", "7:00 AM – 8:00 PM"],
    href: null,
  },
];

/* ── map embed — Google Maps (no API key, place query) ──────────────────── */
const MAP_SRC =
  "https://maps.google.com/maps" +
  "?q=Ambey+Nursery+Near+Litchi+Bagan+Radhanagar+Kasba+Purnea+Bihar+854330+India" +
  "&output=embed" +
  "&z=17";

/* ========================================================================= */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const field = (id: keyof typeof form, label: string, type = "text", rows?: number) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: "#2d5a35" }}>
        {label}
      </label>
      {rows ? (
        <textarea
          id={id} rows={rows} value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          required
          style={inputStyle}
          placeholder={`Your ${label.toLowerCase()}…`}
        />
      ) : (
        <input
          id={id} type={type} value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          required={id !== "phone"}
          style={inputStyle}
          placeholder={`Your ${label.toLowerCase()}…`}
        />
      )}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "hsl(140,25%,96%)", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── Hero banner ──────────────────────────────────────────────────── */}
      <div className="relative h-[250px] md:h-[280px] overflow-hidden flex items-center">
        <img src={HERO_BG} alt="plants" className="absolute inset-0 w-full h-full object-cover brightness-[0.42]" />
        {/* leaf watermark */}
        <Leaf className="absolute -right-10 md:right-[60px] -bottom-5 w-[150px] md:w-[220px] h-[150px] md:h-[220px] text-white opacity-5" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[#a8d5a2] text-xs md:text-[13px] font-semibold tracking-[3px] uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="text-white text-3xl md:text-[42px] font-extrabold m-0 leading-[1.15]">
            Contact <span className="text-[#7ecb78]">Ambey Nursery</span>
          </h1>
          <p className="text-[#bcd9b8] mt-2 text-sm md:text-[15px] max-w-lg">
            We'd love to hear from you — visit us, call us, or drop a message.
          </p>
        </div>
      </div>

      {/* ── Info cards row ───────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "-40px auto 0", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {INFO_ITEMS.map(({ icon: Icon, label, lines, href }) => (
            <div key={label} style={{
              background: "#fff", borderRadius: 12,
              border: "1px solid #d4e8d0", padding: "20px 20px",
              boxShadow: "0 4px 18px rgba(58,103,65,0.08)",
              display: "flex", flexDirection: "column", gap: 8,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "hsl(133,47%,90%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={20} color="#3a6741" />
              </div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#1a3a20", margin: 0 }}>{label}</p>
              {href ? (
                <a href={href} style={{ color: "#4a7a50", fontSize: 13, textDecoration: "none", lineHeight: 1.6 }}>
                  {lines.join("\n")}
                </a>
              ) : (
                <p style={{ color: "#4a7a50", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                  {lines.map((l, i) => (
                    <span key={i}>
                      <span
                        onClick={label === "Call Us" ? () => {
                          navigator.clipboard.writeText(l);
                          alert("Copied to clipboard: " + l);
                        } : undefined}
                        style={label === "Call Us" ? { cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" } : undefined}
                        title={label === "Call Us" ? "Click to copy" : undefined}
                      >
                        {l}
                      </span>
                      {i < lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Form + Side image ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-14 flex flex-col lg:flex-row gap-8 lg:gap-10">

        {/* Contact form */}
        <div className="flex-1 w-full bg-white rounded-2xl border border-[#d4e8d0] p-6 md:p-9 shadow-[0_4px_24px_rgba(58,103,65,0.07)]">
          <h2 style={{ fontWeight: 800, fontSize: 22, color: "#1a3a20", marginBottom: 6, marginTop: 0 }}>
            Send Us a Message
          </h2>
          <p style={{ color: "#6b8c6b", fontSize: 13, marginBottom: 24, marginTop: 0 }}>
            Fill in the form below and we'll get back to you within 24 hours.
          </p>

          {sent ? (
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 12, padding: "40px 0", color: "#3a6741",
            }}>
              <CheckCircle size={52} color="#3a6741" />
              <p style={{ fontWeight: 700, fontSize: 17, margin: 0 }}>Message Sent!</p>
              <p style={{ color: "#6b8c6b", fontSize: 13, margin: 0 }}>We'll reach out to you shortly.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                style={{ ...btnStyle, marginTop: 8 }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {field("name", "Full Name")}
                {field("email", "Email Address", "email")}
              </div>
              {field("phone", "Phone Number (optional)", "tel")}
              {field("message", "Your Message", "text", 5)}
              <button type="submit" disabled={loading} style={{ ...btnStyle, marginTop: 4, opacity: loading ? 0.75 : 1 }}>
                {loading ? "Sending…" : <><Send size={15} style={{ marginRight: 6 }} />Send Message</>}
              </button>
            </form>
          )}
        </div>

        {/* Side plant image + quick note */}
        <div className="w-full lg:w-[420px] flex-shrink-0 flex flex-col gap-5">
          <div style={{ borderRadius: 16, overflow: "hidden", flexShrink: 0, border: "1px solid #d4e8d0" }}>
            <img src={SIDE_PLANT} alt="nursery plants" style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
          </div>
          <div style={{
            background: "hsl(133,47%,90%)", borderRadius: 14,
            padding: "22px 24px", border: "1px solid #b8dab0",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Leaf size={18} color="#3a6741" />
              <span style={{ fontWeight: 700, fontSize: 14, color: "#1a3a20" }}>Why Visit Us?</span>
            </div>
            {[
              "500+ varieties of plants",
              "Expert gardening advice",
              "Bulk & wholesale orders",
              "Home delivery available",
            ].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <span style={{ color: "#3a6741", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: 13, color: "#2d5234" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Map section ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto 64px", padding: "0 24px" }}>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          border: "1px solid #d4e8d0",
          boxShadow: "0 4px 24px rgba(58,103,65,0.09)",
        }}>
          {/* map header bar */}
          <div style={{
            background: "#3a6741", padding: "14px 24px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <MapPin size={18} color="#7ecb78" />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>
              Ambey Nursery <span className="hidden sm:inline">— Kasba, Purnea, Bihar</span>
            </span>
            <a
              href="https://maps.app.goo.gl/8MHVZv9Wtmoy6mL96"
              target="_blank" rel="noreferrer"
              className="ml-auto text-[#a8d5a2] text-[11px] sm:text-xs no-underline font-semibold border border-[#6aab6a] rounded-full px-3 py-1 whitespace-nowrap"
            >
              Open Maps ↗
            </a>
          </div>
          <iframe
            title="Ambey Nursery Location"
            src={MAP_SRC}
            style={{ width: "100%", height: 420, border: "none", display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

/* ── shared styles ────────────────────────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  padding: "10px 14px", fontSize: 13,
  border: "1px solid #c8dbc0", borderRadius: 8,
  outline: "none", fontFamily: "inherit",
  color: "#1a3a20", background: "#f9fbf8",
  resize: "vertical",
  transition: "border-color 0.2s",
};

const btnStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "center",
  background: "#3a6741", color: "#fff",
  border: "none", borderRadius: 8,
  padding: "12px 24px", fontSize: 14, fontWeight: 700,
  cursor: "pointer", fontFamily: "inherit",
  transition: "background 0.2s",
};

export default Contact;
