import { Link, useLocation } from 'wouter';

const items = [
  { name: 'Overview', href: '/clinics/ixtapa-zihuatanejo' },
  { name: 'The Residence', href: '/clinics/ixtapa-zihuatanejo/residence' },
  { name: 'Treatments', href: '/clinics/ixtapa-zihuatanejo/treatments' },
  { name: 'Your Team', href: '/clinics/ixtapa-zihuatanejo/team' },
  { name: 'Plan Your Stay', href: '/clinics/ixtapa-zihuatanejo/inquire' },
];

export function Dod5StarNav() {
  const [location] = useLocation();

  return (
    <div className="sticky top-20 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 overflow-x-auto py-3" aria-label="DOD5Star retreat">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase whitespace-nowrap pr-3 border-r border-white/10 mr-2">
            DOD5Star
          </span>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                location === item.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
