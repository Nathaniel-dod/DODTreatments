import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';

const treatments = [
  { name: 'Wolfe Non-Surgical', href: '/treatments/wolfe-non-surgical' },
  { name: 'CellSonic Regeneration ESWT', href: '/treatments/cellsonic-regeneration' },
  { name: 'Cardio MedBed EECP', href: '/treatments/cardio-medbed' },
];

const company = [
  { name: 'Consultations', href: '/consultations' },
  { name: 'Clinics', href: '/clinics' },
  { name: 'Personal Treatment & Training', href: '/personal-treatment' },
  { name: 'Find Practitioners', href: '/practitioners' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary/80 flex items-center justify-center shadow-lg">
                <span className="text-background font-bold text-lg">D</span>
              </div>
              <div>
                <div className="text-lg font-bold gold-gradient">Doc of Detox</div>
                <div className="text-xs text-muted-foreground -mt-1">Treatments</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced energy medicine for life-changing regenerative healing.
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-bold mb-4">Treatments</h3>
            <ul className="space-y-2.5">
              {treatments.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:1-855-900-4544" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>1-855-900-4544<br /><span className="text-xs">Toll-Free North America</span></span>
                </a>
              </li>
              <li>
                <a href="tel:1-469-861-9454" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>1-469-861-9454<br /><span className="text-xs">Dr. Darrell Wolfe Direct</span></span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Clinics in Ixtapa-Zihuatanejo, México & Penticton, BC Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Doc of Detox Treatments. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Reviewed by Dr. Darrell Wolfe, N.D.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
