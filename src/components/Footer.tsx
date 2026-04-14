import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-accent/30 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo & description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Ambey Nursery</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bringing nature closer to your home with carefully sourced, high-quality plants.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <span className="text-xs font-bold text-muted-foreground hover:text-primary-foreground">
                    {s[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {([
                { label: "Home",     to: "/" },
                { label: "Shop",     to: "/category" },
                { label: "About Us", to: "/#reviews" },
                { label: "Blog",     to: "/#tips" },
                { label: "Contact",  to: "/contact" },
              ] as const).map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Address */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Location &amp; Address</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">📍</span>
                <span>Ambey Nursery, Near Litchi bagan, Radhanagar, Kasba<br />Purnea, Bihar  – 854330, India</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">📞</span>
                <a 
                  onClick={() => { navigator.clipboard.writeText("+91 8210957160"); alert("Copied to clipboard: +91 8210957160"); }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  +91 8210957160
                </a>
                <a 
                  onClick={() => { navigator.clipboard.writeText("+91 9934677785"); alert("Copied to clipboard: +91 9934677785"); }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                   +91 9934677785
                </a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">✉️</span>
                <a href="mailto:info@ambeynursery.in" className="hover:text-primary transition-colors">info@ambeynursery.in</a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">🕗</span>
                <span>Mon – Sun: 7:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Ambey Nursery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
