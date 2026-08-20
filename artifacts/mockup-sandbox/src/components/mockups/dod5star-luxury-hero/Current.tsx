import './_group.css';
import { MapPin } from 'lucide-react';

// ─── Inline DOD5Star subnavigation ───────────────────────────────────────────

const navItems = [
  { name: 'Overview', href: '/clinics/ixtapa-zihuatanejo' },
  { name: 'The Residence', href: '/clinics/ixtapa-zihuatanejo/residence' },
  { name: 'Treatments', href: '/clinics/ixtapa-zihuatanejo/treatments' },
  { name: 'Your Team', href: '/clinics/ixtapa-zihuatanejo/team' },
  { name: 'Plan Your Stay', href: '/clinics/ixtapa-zihuatanejo/inquire' },
];

function Dod5StarNav() {
  // "Overview" is the active page in the current baseline
  const activeHref = '/clinics/ixtapa-zihuatanejo';

  return (
    <div
      className="sticky top-0 z-40 border-b"
      style={{
        borderColor: 'rgba(255,255,255,0.05)',
        backgroundColor: 'hsla(218,40%,14%,0.80)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-1 overflow-x-auto py-3"
          aria-label="DOD5Star retreat"
        >
          <span
            className="text-xs font-semibold uppercase whitespace-nowrap pr-3 mr-2"
            style={{
              letterSpacing: '0.2em',
              color: 'hsl(var(--primary))',
              borderRight: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            DOD5Star
          </span>
          {navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => e.preventDefault()}
                className="px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
                style={
                  isActive
                    ? {
                        backgroundColor: 'hsl(var(--primary) / 0.10)',
                        color: 'hsl(var(--primary))',
                      }
                    : {
                        color: 'hsl(var(--foreground) / 0.70)',
                      }
                }
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

export function Current() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
    >
      <Dod5StarNav />

      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 relative overflow-hidden">
        <img
          src="/__mockup/images/ixtapa-aerial.jpg"
          alt="Aerial view of Ixtapa-Zihuatanejo, México — jungle, marina, and Pacific coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, hsl(218 40% 14% / 0.80), hsl(218 40% 14% / 0.70), hsl(218 40% 14%))',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location pill */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin
                className="w-6 h-6"
                style={{ color: 'hsl(var(--primary))' }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: 'hsl(var(--primary))' }}
              >
                Ixtapa-Zihuatanejo, México
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow"
            >
              5-Star Healing &amp; Training Retreat
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              A winning strategy for taking control of your healing
            </p>

            {/* Attribution */}
            <p
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: 'hsl(var(--foreground) / 0.80)' }}
            >
              Created by Dr. Darrell Wolfe — hosted by Master Practitioners Dr. Sage Wolfe &amp; Jesse Malcolm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
