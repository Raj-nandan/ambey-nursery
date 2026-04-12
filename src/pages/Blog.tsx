import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Calendar, ChevronRight, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOGS, BLOG_CATEGORIES } from "@/data/blogs";
import blogHero from "@/assets/images/blog-hero.jpg";

const HERO_BG = blogHero;

const CATEGORY_COLORS: Record<string, string> = {
  "Indoor Plants":     "#3a6741",
  "Outdoor Plants":    "#2e7d32",
  "Succulents & Cacti":"#558b2f",
  "Flowering Plants":  "#6a4c93",
  "Soil & Composting": "#795548",
  "Hanging Plants":    "#00838f",
};

const Blog = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered = useMemo(
    () => (active === "All" ? BLOGS : BLOGS.filter((b) => b.category === active)),
    [active]
  );

  return (
    <div style={{ minHeight: "100vh", background: "hsl(140,25%,96%)", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[250px] md:h-[300px] overflow-hidden flex items-center">
        <img src={HERO_BG} alt="plants" className="absolute inset-0 w-full h-full object-cover brightness-[0.38]" />
        <Leaf className="absolute -right-10 md:right-[60px] -bottom-5 w-[150px] md:w-[220px] h-[150px] md:h-[220px] text-white opacity-5" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[#a8d5a2] text-xs md:text-[13px] font-semibold tracking-[3px] uppercase mb-2">
            Plant Care Knowledge
          </p>
          <h1 className="text-white text-3xl md:text-[44px] font-extrabold m-0 leading-[1.15]">
            The <span className="text-[#7ecb78]">Ambey Nursery</span> Blog
          </h1>
          <p className="text-[#bcd9b8] mt-2 md:mt-2.5 text-sm md:text-[15px] max-w-lg">
            Expert guides on plant care, soil types, and growing tips for every Indian home & garden.
          </p>
        </div>
      </div>

      {/* ── Category filter ──────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#d4e8d0] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto py-3 scrollbar-none">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: active === cat ? "#3a6741" : "hsl(133,47%,90%)",
                color: active === cat ? "#fff" : "#3a6741",
              }}
              className="whitespace-nowrap flex-shrink-0 px-4 py-1.5 md:py-2 rounded-full text-xs md:text-[13px] font-semibold cursor-pointer border-none transition-all duration-200"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto my-8 md:my-10 mb-16 px-4 sm:px-6 lg:px-8">
        <p className="text-[13px] text-[#6b8c6b] mb-6">
          Showing <strong>{filtered.length}</strong> article{filtered.length !== 1 ? "s" : ""}
          {active !== "All" && <> in <strong>{active}</strong></>}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <article
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              style={{
                background: "#fff", borderRadius: 14, overflow: "hidden",
                border: "1px solid #d4e8d0", cursor: "pointer",
                display: "flex", flexDirection: "column",
                boxShadow: "0 2px 12px rgba(58,103,65,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(58,103,65,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(58,103,65,0.06)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: 210 }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                {/* Category pill */}
                <span style={{
                  position: "absolute", top: 12, left: 12,
                  background: CATEGORY_COLORS[blog.category] ?? "#3a6741",
                  color: "#fff", fontSize: 11, fontWeight: 700,
                  borderRadius: 20, padding: "4px 10px",
                }}>
                  {blog.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h2 style={{ fontWeight: 700, fontSize: 15, color: "#1a3a20", margin: "0 0 8px", lineHeight: 1.45 }}>
                  {blog.title}
                </h2>
                <p style={{ fontSize: 13, color: "#5a7a5a", lineHeight: 1.6, margin: "0 0 16px", flex: 1 }}>
                  {blog.excerpt}
                </p>

                {/* Meta + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#8aab8a" }}>
                      <Clock size={12} /> {blog.readTime}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#8aab8a" }}>
                      <Calendar size={12} /> {blog.date}
                    </span>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700, color: "#3a6741" }}>
                    Read <ChevronRight size={13} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
