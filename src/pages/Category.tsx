import { useState, useMemo, useEffect } from "react";
import { Search, ShoppingCart, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
const CATEGORIES = [
  "All Plants",
  "Indoor Plants",
  "Succulents",
  "Flowering Plants",
  "Hanging Plants",
  "Outdoor Plants",
  "Creepers",
  "Fruit Plants",
  "Gardening Tools",
  "Soil & Composts",
];

const PRICE_RANGES = ["All Prices", "Under Rs 20", "Rs 20 - Rs 30", "Over Rs 30"];
const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low", "Name: A Z"];

// ─── colour tokens (exactly as seen in the reference) ───────────────────────
const CLR = {
  darkGreen: "#3a6741",   // active buttons, price text, Add-to-Cart btn
  linkGreen: "#3a6741",   // category / sort text links
  headerBg: "#c8d9ba",   // sage-green page banner
  sidebarBg: "#ffffff",
  cardBg: "#ffffff",
  border: "#d9e3d4",
  mutedText: "#6b8c6b",   // category label under product name
  bodyText: "#222",
};

// ─── helper ──────────────────────────────────────────────────────────────────
function matchesPrice(price: number, range: string) {
  if (range === "All Prices") return true;
  if (range === "Under Rs 20") return price < 20;
  if (range === "Rs 20 - Rs 30") return price >= 20 && price <= 30;
  if (range === "Over Rs 30") return price > 30;
  return true;
}

// ─── component ───────────────────────────────────────────────────────────────
const Category = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Plants");
  const [priceRange, setPriceRange] = useState("All Prices");
  const [sortBy, setSortBy] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, priceRange, sortBy]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('products').select('*');
      if (!error && data) {
        setAllProducts(data);
      } else {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    let list = allProducts.filter((p) => {
      const matchCat = category === "All Plants" || p.category === category;
      const matchPrice = matchesPrice(p.price, priceRange);
      const matchSearch = search.trim() === "" ||
        p.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        p.category.toLowerCase().includes(search.trim().toLowerCase());
      return matchCat && matchPrice && matchSearch;
    });

    if (sortBy === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "Name: A Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, category, priceRange, sortBy, allProducts]);

  const clearAll = () => {
    setSearch(""); setCategory("All Plants");
    setPriceRange("All Prices"); setSortBy("Default");
  };

  // ─── sub-components ────────────────────────────────────────────────────────
  const ActiveBtn = ({ label }: { label: string }) => (
    <div style={{
      background: CLR.darkGreen, color: "#fff",
      borderRadius: 4, padding: "6px 12px",
      fontSize: 13, fontWeight: 600, marginBottom: 4,
    }}>{label}</div>
  );

  const FilterLink = ({
    label, onClick,
  }: { label: string; onClick: () => void }) => (
    <button onClick={onClick} style={{
      display: "block", width: "100%", textAlign: "left",
      background: "none", border: "none", cursor: "pointer",
      color: CLR.linkGreen, fontSize: 13, padding: "4px 0",
      fontFamily: "inherit",
    }}>{label}</button>
  );

  const SectionLabel = ({ children }: { children: string }) => (
    <p style={{ fontWeight: 700, fontSize: 13, color: CLR.bodyText, marginBottom: 8, marginTop: 16 }}>
      {children}
    </p>
  );

  const SkeletonCard = () => (
    <div className="bg-white border border-[#d9e3d4] rounded-md overflow-hidden flex flex-col">
      <div className="animate-pulse w-full h-[170px] bg-slate-200" />
      <div className="p-3 pb-3.5 flex-1 flex flex-col gap-2">
        <div className="animate-pulse w-[70%] h-4 bg-slate-200 rounded" />
        <div className="animate-pulse w-[40%] h-3 bg-slate-200 rounded" />
        <div className="animate-pulse w-[30%] h-[18px] bg-slate-200 rounded mt-2" />
        <div className="animate-pulse w-full h-[28px] bg-slate-200 rounded mt-auto" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f8f2] font-sans">
      <Navbar />

      {/* ── Page banner ────────────────────────────────────────────────────── */}
      <div className="bg-[#c8d9ba] py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a3a20] m-0">
            Our Collection
          </h1>
          <p className="text-[#3d5c3a] mt-1.5 text-sm md:text-base">
            Browse through our wide selection of beautiful, healthy plants
          </p>
        </div>
      </div>

      {/* ── Main layout ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 md:my-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <div className="w-full md:w-56 lg:w-64 flex-shrink-0">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden w-full flex justify-between items-center bg-white border border-[#d9e3d4] rounded-lg p-3 mb-4">
            <span className="font-semibold text-[15px] text-[#222]">Filters</span>
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 text-sm font-medium text-[#3a6741] focus:outline-none"
            >
              <Filter className="w-4 h-4" />
              {showMobileFilters ? "Hide" : "Show"}
            </button>
          </div>

          <aside className={`${showMobileFilters ? 'block' : 'hidden'} md:block bg-white border border-[#d9e3d4] rounded-lg p-4`}>
          {/* header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: CLR.bodyText }}>Filters</span>
            <button onClick={clearAll} style={{
              background: "none", border: "none", cursor: "pointer",
              color: CLR.linkGreen, fontSize: 12, fontFamily: "inherit",
            }}>Clear All</button>
          </div>

          {/* Search */}
          <SectionLabel>Search</SectionLabel>
          <div style={{ position: "relative", marginBottom: 4 }}>
            <Search style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", width: 13, height: 13, color: "#888" }} />
            <input
              type="text"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%", boxSizing: "border-box",
                padding: "6px 8px 6px 26px",
                border: `1px solid ${CLR.border}`, borderRadius: 4,
                fontSize: 12, outline: "none", fontFamily: "inherit",
                color: CLR.bodyText, background: "#f9fbf9",
              }}
            />
          </div>

          {/* Categories */}
          <SectionLabel>Categories</SectionLabel>
          {category === "All Plants"
            ? <ActiveBtn label="All Plants" />
            : <FilterLink label="All Plants" onClick={() => setCategory("All Plants")} />}
          {CATEGORIES.filter(c => c !== "All Plants").map((cat) =>
            category === cat
              ? <ActiveBtn key={cat} label={cat} />
              : <FilterLink key={cat} label={cat} onClick={() => setCategory(cat)} />
          )}

          {/* Price Range */}
          <SectionLabel>Price Range</SectionLabel>
          {PRICE_RANGES.map((pr) =>
            priceRange === pr
              ? <ActiveBtn key={pr} label={pr} />
              : <FilterLink key={pr} label={pr} onClick={() => setPriceRange(pr)} />
          )}

          {/* Sort By */}
          <SectionLabel>Sort By</SectionLabel>
          {SORT_OPTIONS.map((s) =>
            sortBy === s
              ? <ActiveBtn key={s} label={s} />
              : <FilterLink key={s} label={s} onClick={() => setSortBy(s)} />
          )}
          </aside>
        </div>

        {/* ── Product area ─────────────────────────────────────────────────── */}
        <div className="flex-1 w-full">
          <p className="text-sm text-[#555] mb-4">
            {loading ? "Loading products..." : <>Showing <strong>{filtered.length}</strong> product{filtered.length !== 1 ? "s" : ""}</>}
          </p>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <p style={{ color: "#888", padding: "40px 0", textAlign: "center" }}>
              No products found. Try a different filter or search term.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.slice((currentPage - 1) * 12, currentPage * 12).map((p) => (
                  <div key={p.id} style={{
                    background: CLR.cardBg,
                    border: `1px solid ${CLR.border}`,
                    borderRadius: 6, overflow: "hidden",
                    display: "flex", flexDirection: "column",
                    transition: "box-shadow 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(58,103,65,0.13)")}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                  >
                    {/* Image + badge */}
                    <div style={{ position: "relative" }}>
                      <img
                        src={p.image_url}
                        alt={p.name}
                        style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }}
                      />
                      {/* Removed badge */}
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "12px 12px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p style={{ fontWeight: 700, fontSize: 14, color: CLR.bodyText, margin: 0 }}>{p.name}</p>
                      <p style={{ fontSize: 11, color: CLR.mutedText, margin: "2px 0 8px" }}>{p.category}</p>

                      {/* Price row */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <span style={{ fontWeight: 800, fontSize: 16, color: CLR.darkGreen }}>
                          Rs {p.price.toFixed(2)}
                        </span>
                        {p.originalPrice && (
                          <span style={{ fontSize: 12, color: "#999", textDecoration: "line-through" }}>
                            ${p.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button 
                        onClick={() => {
                          addToCart(p);
                          toast.success(`${p.name} added to cart`);
                        }}
                        style={{
                        marginTop: "auto",
                        background: CLR.darkGreen, color: "#fff",
                        border: "none", borderRadius: 4,
                        padding: "8px 12px",
                        fontSize: 12, fontWeight: 600, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        fontFamily: "inherit", width: "100%",
                        transition: "background 0.2s",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#2d5234")}
                        onMouseLeave={e => (e.currentTarget.style.background = CLR.darkGreen)}
                      >
                        <ShoppingCart style={{ width: 13, height: 13 }} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Pagination ─────────────────────────────────────────────── */}
              {Math.ceil(filtered.length / 12) > 1 && (
                <div className="flex justify-center mt-10">
                  <div className="flex border border-[#d9e3d4] rounded-md bg-white overflow-hidden flex-wrap max-w-full justify-center">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      style={{
                        padding: "8px 16px", background: "none", border: "none",
                        borderRight: `1px solid ${CLR.border}`,
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        color: currentPage === 1 ? "#aaa" : CLR.bodyText,
                        fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 4,
                        fontFamily: "inherit", opacity: currentPage === 1 ? 0.6 : 1
                      }}
                    >
                      &lt; Previous
                    </button>

                    {Array.from({ length: Math.ceil(filtered.length / 12) }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        style={{
                          padding: "8px 16px",
                          background: currentPage === page ? CLR.darkGreen : "none",
                          border: "none", borderRight: `1px solid ${CLR.border}`,
                          cursor: "pointer",
                          color: currentPage === page ? "#fff" : CLR.linkGreen,
                          fontSize: 14, fontWeight: 600, fontFamily: "inherit"
                        }}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(p => Math.min(Math.ceil(filtered.length / 12), p + 1))}
                      disabled={currentPage === Math.ceil(filtered.length / 12)}
                      style={{
                        padding: "8px 16px", background: "none", border: "none",
                        cursor: currentPage === Math.ceil(filtered.length / 12) ? "not-allowed" : "pointer",
                        color: currentPage === Math.ceil(filtered.length / 12) ? "#aaa" : CLR.bodyText,
                        fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 4,
                        fontFamily: "inherit", opacity: currentPage === Math.ceil(filtered.length / 12) ? 0.6 : 1
                      }}
                    >
                      Next &gt;
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Category;
