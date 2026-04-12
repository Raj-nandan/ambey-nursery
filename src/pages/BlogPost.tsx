import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, CheckCircle, Leaf, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOGS } from "@/data/blogs";

const CATEGORY_COLORS: Record<string, string> = {
  "Indoor Plants":      "#3a6741",
  "Outdoor Plants":     "#2e7d32",
  "Succulents & Cacti": "#558b2f",
  "Flowering Plants":   "#6a4c93",
  "Soil & Composting":  "#795548",
  "Hanging Plants":     "#00838f",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = BLOGS.find((b) => b.slug === slug);
  const related = BLOGS.filter((b) => b.id !== blog?.id && b.category === blog?.category).slice(0, 3);

  if (!blog) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", background: "hsl(140,25%,96%)" }}>
        <Leaf size={52} color="#3a6741" style={{ marginBottom: 16, opacity: 0.4 }} />
        <h2 style={{ color: "#1a3a20", fontWeight: 800 }}>Post not found</h2>
        <button onClick={() => navigate("/blog")} style={btnStyle}>← Back to Blog</button>
      </div>
    );
  }

  const catColor = CATEGORY_COLORS[blog.category] ?? "#3a6741";

  return (
    <div style={{ minHeight: "100vh", background: "hsl(140,25%,96%)", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── Hero image ───────────────────────────────────────────────────── */}
      <div className="relative h-[250px] md:h-[380px] overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover brightness-[0.45]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1e0c]/80" />
        <div className="absolute bottom-6 md:bottom-10 inset-x-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span style={{ background: catColor }} className="inline-block text-white text-[11px] font-bold rounded-full px-3 py-1 mb-3">
            {blog.category}
          </span>
          <h1 className="text-white text-2xl md:text-[32px] font-extrabold m-0 leading-snug">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* ── Main layout ──────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 pb-16 flex flex-col lg:flex-row gap-8 items-start">

        {/* ── Article content ─────────────────────────────────────────── */}
        <article className="flex-1 w-full min-w-0">
          {/* Back link */}
          <button
            onClick={() => navigate("/blog")}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#3a6741", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", marginBottom: 24, padding: 0 }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </button>

          {/* Meta row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            {[
              { icon: <User size={13} />, text: blog.author },
              { icon: <Calendar size={13} />, text: blog.date },
              { icon: <Clock size={13} />, text: blog.readTime },
            ].map(({ icon, text }) => (
              <span key={text} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b8c6b" }}>
                {icon} {text}
              </span>
            ))}
          </div>

          {/* Intro */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #d4e8d0", padding: "24px 28px", marginBottom: 24, boxShadow: "0 2px 12px rgba(58,103,65,0.06)" }}>
            <p style={{ fontSize: 16, color: "#2d4a2d", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              {blog.content.intro}
            </p>
          </div>

          {/* Sections */}
          {blog.content.sections.map((section, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid #d4e8d0", padding: "24px 28px", marginBottom: 20, boxShadow: "0 2px 12px rgba(58,103,65,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 4, height: 22, borderRadius: 4, background: catColor, flexShrink: 0 }} />
                <h2 style={{ fontWeight: 800, fontSize: 17, color: "#1a3a20", margin: 0 }}>
                  {section.heading}
                </h2>
              </div>
              <p style={{ fontSize: 14, color: "#3d5a3d", lineHeight: 1.85, margin: "0 0 (section.tips ? 16 : 0)px" }}>
                {section.body}
              </p>
              {section.tips && section.tips.length > 0 && (
                <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {section.tips.map((tip) => (
                    <li key={tip} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#2d5234" }}>
                      <CheckCircle size={15} color={catColor} style={{ marginTop: 1, flexShrink: 0 }} />
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div style={{ background: `${catColor}15`, borderRadius: 14, border: `1.5px solid ${catColor}30`, padding: "24px 28px", marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Leaf size={16} color={catColor} />
              <span style={{ fontWeight: 700, fontSize: 14, color: catColor }}>Final Thoughts</span>
            </div>
            <p style={{ fontSize: 14, color: "#2d4a2d", lineHeight: 1.85, margin: 0 }}>
              {blog.content.conclusion}
            </p>
          </div>

          {/* Related posts (mobile) */}
          {related.length > 0 && (
            <div style={{ display: "none" }} className="mobile-related">
              {/* hidden on desktop — shown via sidebar */}
            </div>
          )}
        </article>

        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <aside className="w-full lg:w-[300px] flex-shrink-0 flex flex-col gap-6">

          {/* About card */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #d4e8d0", padding: "22px", boxShadow: "0 2px 12px rgba(58,103,65,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Leaf size={16} color="#3a6741" />
              <span style={{ fontWeight: 700, fontSize: 13, color: "#1a3a20" }}>About this Guide</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Category", value: blog.category },
                { label: "Read Time", value: blog.readTime },
                { label: "Published", value: blog.date },
                { label: "Author", value: blog.author },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, paddingBottom: 6, borderBottom: "1px solid #eef5ec" }}>
                  <span style={{ color: "#8aab8a", fontWeight: 600 }}>{label}</span>
                  <span style={{ color: "#1a3a20" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category badge */}
          <div style={{ background: `${catColor}18`, borderRadius: 14, padding: "18px 20px", border: `1px solid ${catColor}30` }}>
            <p style={{ fontWeight: 700, fontSize: 12, color: catColor, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1 }}>
              Category
            </p>
            <button
              onClick={() => navigate("/blog")}
              style={{ background: catColor, color: "#fff", border: "none", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
            >
              {blog.category}
            </button>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #d4e8d0", padding: "22px", boxShadow: "0 2px 12px rgba(58,103,65,0.06)" }}>
              <p style={{ fontWeight: 800, fontSize: 14, color: "#1a3a20", margin: "0 0 14px" }}>Related Articles</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {related.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => navigate(`/blog/${r.slug}`)}
                    style={{ display: "flex", gap: 10, cursor: "pointer" }}
                  >
                    <img src={r.image} alt={r.title} style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#1a3a20", margin: "0 0 3px", lineHeight: 1.4 }}>{r.title}</p>
                      <p style={{ fontSize: 11, color: "#8aab8a", margin: 0, display: "flex", alignItems: "center", gap: 3 }}>
                        <Clock size={10} /> {r.readTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA card */}
          <div style={{ background: "#3a6741", borderRadius: 14, padding: "22px 20px" }}>
            <Leaf size={28} color="#7ecb78" style={{ marginBottom: 10 }} />
            <p style={{ fontWeight: 800, fontSize: 14, color: "#fff", margin: "0 0 6px" }}>Visit Ambey Nursery</p>
            <p style={{ fontSize: 12, color: "#bcd9b8", margin: "0 0 14px", lineHeight: 1.6 }}>Browse 500+ plant varieties at our nursery in Purnea, Bihar.</p>
            <button
              onClick={() => navigate("/contact")}
              style={{ background: "#7ecb78", color: "#1a3a20", border: "none", borderRadius: 20, padding: "8px 18px", fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}
            >
              Get Directions <ChevronRight size={12} />
            </button>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  marginTop: 16, background: "#3a6741", color: "#fff", border: "none",
  borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 700,
  cursor: "pointer", fontFamily: "inherit",
};

export default BlogPost;
