import { Zap, Mail, Github } from "lucide-react";

const DEMO_URL =
  "https://gas-cylinder-transactions-624576306621.asia-southeast1.run.app";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-white text-lg">
                GasTransact <span className="text-primary">Pro</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Sistem manajemen transaksi LPG untuk distributor dan agen di
              seluruh Indonesia.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Fitur", href: "#fitur" },
                { label: "Dashboard", href: "#dashboard" },
                { label: "Keunggulan", href: "#keunggulan" },
                { label: "Coba Demo", href: DEMO_URL, external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Kontak
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:ardli.firdaus@gmail.com"
                className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                ardli.firdaus@gmail.com
              </a>
              <p className="text-muted text-sm">
                Pertanyaan & dukungan teknis — kirim email kapan saja.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} GasTransact Pro. Hak Cipta Dilindungi.
          </p>
          <p className="text-muted text-xs">
            Dibuat untuk UMKM Penyedia Gas LPG Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
