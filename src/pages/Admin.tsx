import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, LogOut, Plus, Pencil, Trash2, X, Save, Search, AlertCircle, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";

type Product = Tables<"products">;

const CATEGORIES = [
  "All", "Best Seller", "Succulents", "Creepers", "Flowering Plants", "Fruiting Plants",
  "Indoor Plants", "Outdoor Plants", "Hanging Plants", "Soil & Composts", "Pots",
];

const Admin = () => {
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({
    name: "", description: "", price: "", image_url: "", category: "Indoor Plants", rating: "4.5", in_stock: true, is_bestseller: false,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProducts = products.length;
  const outOfStockCount = products.filter(p => !p.in_stock).length;

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) checkAdmin(session.user.id);
      else { setIsAdmin(false); setLoading(false); }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) checkAdmin(session.user.id);
      else setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (userId: string) => {
    const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    
    if (error) {
      console.error("RPC Error:", error);
      if (error.message.includes("Could not find the function") || error.code === 'PGRST202') {
         toast({ title: "Database not setup", description: "The Supabase database has not been configured. Please run the SQL migration script from supabase/migrations in your Supabase SQL Editor.", variant: "destructive" });
      }
    }
    
    setIsAdmin(!!data);
    setLoading(false);
    if (data) fetchProducts();
  };

  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (data) setProducts(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthLoading(false);
    if (error) toast({ title: "Login failed", description: error.message, variant: "destructive" });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setIsAdmin(false);
  };

  const resetForm = () => {
    setForm({ name: "", description: "", price: "", image_url: "", category: "Indoor Plants", rating: "4.5", in_stock: true, is_bestseller: false });
    setEditingId(null);
    setShowAdd(false);
  };

  const startEdit = (p: Product) => {
    setForm({
      name: p.name, description: p.description || "", price: String(p.price),
      image_url: p.image_url || "", category: p.category,
      rating: String(p.rating || 4.5), in_stock: p.in_stock ?? true, is_bestseller: p.is_bestseller ?? false,
    });
    setEditingId(p.id);
    setShowAdd(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.price) {
      toast({ title: "Name and price are required", variant: "destructive" });
      return;
    }
    if (form.is_bestseller) {
      const currentBestsellers = products.filter(p => p.is_bestseller && p.id !== editingId);
      if (currentBestsellers.length >= 4) {
        toast({ title: "Cannot set bestseller", description: "You can only have up to 4 bestsellers.", variant: "destructive" });
        return;
      }
    }

    const payload = {
      name: form.name, description: form.description || null,
      price: parseFloat(form.price), image_url: form.image_url || null,
      category: form.category,
      rating: parseFloat(form.rating) || 4.5, in_stock: form.in_stock,
      is_bestseller: form.is_bestseller,
    };

    if (editingId) {
      const { error } = await supabase.from("products").update(payload).eq("id", editingId);
      if (error) { toast({ title: "Update failed", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Product updated" });
    } else {
      const { error } = await supabase.from("products").insert(payload);
      if (error) { toast({ title: "Insert failed", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Product added" });
    }
    resetForm();
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) { toast({ title: "Delete failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Product deleted" });
    fetchProducts();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground">Loading...</p></div>;

  // Login screen
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/30">
        <div className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Leaf className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold text-foreground">Ambey Nursery Admin</span>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            <Button type="submit" disabled={authLoading} className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {authLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
        <p className="text-destructive font-semibold">You do not have admin access.</p>
        <Button onClick={handleLogout} variant="outline">Sign Out</Button>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">Ambey Nursery Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">{session.user.email}</span>
            <Button onClick={handleLogout} variant="outline" size="sm" className="gap-1 rounded-full">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Manage Products</h1>
          <Button onClick={() => { resetForm(); setShowAdd(true); }} className="gap-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-4 w-4" /> Add Product
          </Button>
        </div>

        {/* ── Stats & Filters ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-4 flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full"><ShoppingBag className="h-5 w-5 text-primary" /></div>
            <div><p className="text-sm text-muted-foreground">Total Products</p><p className="text-xl font-bold">{totalProducts}</p></div>
          </div>
          <div className="bg-card rounded-2xl shadow-sm border border-border p-4 flex items-center gap-4">
            <div className="bg-destructive/10 p-3 rounded-full"><AlertCircle className="h-5 w-5 text-destructive" /></div>
            <div><p className="text-sm text-muted-foreground">Out of Stock</p><p className="text-xl font-bold">{outOfStockCount}</p></div>
          </div>
          <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row gap-3 relative justify-end items-center">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 h-11 rounded-full" />
            </div>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="flex h-11 w-full sm:max-w-[180px] rounded-full border border-input bg-background px-4 py-2 text-sm z-10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Add/Edit form Modal */}
        {showAdd && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-card rounded-2xl shadow-2xl p-6 w-full max-w-2xl border border-border max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-xl text-foreground">{editingId ? "Edit Product" : "Add New Product"}</h2>
                <button onClick={resetForm}><X className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Monstera Deliciosa" /></div>
                <div><Label>Price *</Label><Input type="number" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="12.00" /></div>
                <div><Label>Category</Label>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    {CATEGORIES.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div><Label>Image URL</Label><Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://images.unsplash.com/..." /></div>
                <div><Label>Rating</Label><Input type="number" step="0.1" min="0" max="5" value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} /></div>
                <div className="md:col-span-2">
                  <Label>Description</Label>
                  <textarea 
                    value={form.description} 
                    onChange={(e) => setForm({ ...form, description: e.target.value })} 
                    placeholder="A beautiful plant..."
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={form.in_stock} onChange={(e) => setForm({ ...form, in_stock: e.target.checked })} id="in_stock" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="in_stock" className="cursor-pointer">In Stock</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={form.is_bestseller} onChange={(e) => setForm({ ...form, is_bestseller: e.target.checked })} id="is_bestseller" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="is_bestseller" className="cursor-pointer">Best Seller (Max 4)</Label>
                </div>
              </div>
              <div className="mt-6 flex justify-between gap-2">
                <Button onClick={handleSave} className="flex-1 rounded-md bg-[#5c8a5a] hover:bg-[#4a7248] text-white">
                  {editingId ? "Update Product" : "Add Product"}
                </Button>
                <Button onClick={resetForm} variant="outline" className="rounded-md">Cancel</Button>
              </div>
            </div>
          </div>
        )}

        {/* Products table */}
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-muted-foreground">Image</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Price</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Bestseller</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Stock</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length === 0 && (
                  <tr><td colSpan={7} className="p-8 text-center text-muted-foreground">No products found.</td></tr>
                )}
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      {p.image_url ? <img src={p.image_url} alt={p.name} className="h-12 w-12 rounded-lg object-cover" /> : <div className="h-12 w-12 rounded-lg bg-muted" />}
                    </td>
                    <td className="p-4 font-medium text-foreground">{p.name}</td>
                    <td className="p-4 text-muted-foreground">{p.category}</td>
                    <td className="p-4 font-semibold text-foreground">Rs {Number(p.price).toFixed(2)}</td>
                    <td className="p-4"><span className={`text-xs font-medium ${p.is_bestseller ? "text-primary" : "text-muted-foreground"}`}>{p.is_bestseller ? "★ Yes" : "No"}</span></td>
                    <td className="p-4"><span className={`text-xs font-medium ${p.in_stock ? "text-primary" : "text-destructive"}`}>{p.in_stock ? "In Stock" : "Out"}</span></td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <button onClick={() => startEdit(p)} className="p-2 rounded-lg hover:bg-accent transition-colors"><Pencil className="h-4 w-4 text-muted-foreground" /></button>
                        <button onClick={() => handleDelete(p.id)} className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"><Trash2 className="h-4 w-4 text-destructive" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
