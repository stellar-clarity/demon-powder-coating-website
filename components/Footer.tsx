import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-bg mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-display text-3xl text-light tracking-widest">DEMON</span>
            <span className="font-display text-3xl text-accent tracking-widest">POWDER COATING</span>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Castle Rock, CO&apos;s premier powder coating shop. Custom finishes built to last.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-display text-xl tracking-widest text-light mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-muted text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-xl tracking-widest text-light mb-4">CONTACT</h3>
          <ul className="space-y-2 text-muted text-sm">
            <li>📍 Castle Rock, CO 80104</li>
            <li>📞 (720) 555-0198</li>
            <li>✉️ kevin@demonpowdercoating.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bg text-center text-muted text-xs py-4">
        © {new Date().getFullYear()} Demon Powder Coating. All rights reserved.
      </div>
    </footer>
  );
}
