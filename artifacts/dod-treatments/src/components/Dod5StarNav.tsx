import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown } from 'lucide-react';

const items = [
  { name: 'Overview', href: '/clinics/ixtapa-zihuatanejo' },
  { name: 'The Residence', href: '/clinics/ixtapa-zihuatanejo/residence' },
  { name: 'Amenities', href: '/clinics/ixtapa-zihuatanejo/residence#amenities', anchor: true },
  { name: 'Treatments', href: '/clinics/ixtapa-zihuatanejo/treatments' },
  { name: 'Plan Your Stay', href: '/clinics/ixtapa-zihuatanejo/inquire' },
  { name: 'Ixtapa-Zihuatanejo', href: '/clinics/ixtapa-zihuatanejo/location' },
];

export function Dod5StarNav() {
  const [location] = useLocation();
  const [isAmenitiesVisible, setIsAmenitiesVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location !== '/clinics/ixtapa-zihuatanejo/residence') {
      setIsAmenitiesVisible(false);
      return;
    }

    const amenities = document.getElementById('amenities');
    if (!amenities) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsAmenitiesVisible(entry.isIntersecting),
      { rootMargin: '-25% 0px -60% 0px' },
    );

    observer.observe(amenities);
    return () => observer.disconnect();
  }, [location]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isItemActive = (item: (typeof items)[number]) => {
    if ('anchor' in item) {
      return location === '/clinics/ixtapa-zihuatanejo/residence' && isAmenitiesVisible;
    }
    if (item.href === '/clinics/ixtapa-zihuatanejo/treatments') {
      return location.startsWith(item.href) && !isAmenitiesVisible;
    }
    return location === item.href && !isAmenitiesVisible;
  };

  const currentItem =
    items.find(isItemActive) ?? items[0];

  return (
    <div className="sticky top-0 z-50 mb-10 border-b border-white/5 bg-background/95 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md md:mb-0">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 md:hidden">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-card/80 px-4 py-3 text-left"
            aria-expanded={isMenuOpen}
            aria-controls="dod5star-mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="min-w-0">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">DOD5Star</span>
              <span className="mt-0.5 block truncate text-sm font-medium text-foreground">{currentItem.name}</span>
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-primary transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {isMenuOpen && (
            <nav
              id="dod5star-mobile-menu"
              className="absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl"
              aria-label="DOD5Star retreat"
            >
              {items.map((item) => {
                const isActive = isItemActive(item);
                const className = `block border-b border-white/5 px-4 py-3 text-sm font-medium transition-colors last:border-b-0 ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-white/5 hover:text-foreground'
                }`;

                return 'anchor' in item ? (
                  <a key={item.href} href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={className}
                    onClick={(event) => {
                      setIsMenuOpen(false);
                      if (item.name === 'The Residence' && location === item.href) {
                        event.preventDefault();
                        window.history.replaceState(null, '', window.location.pathname + window.location.search);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        <nav className="hidden items-center gap-1 py-3 md:flex" aria-label="DOD5Star retreat">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase whitespace-nowrap pr-3 border-r border-white/10 mr-2">
            DOD5Star
          </span>
          {items.map((item) => {
            const isActive = isItemActive(item);
            const className = `px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              isActive
                ? 'bg-primary/10 text-primary'
                : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
            }`;

            return 'anchor' in item ? (
              <a key={item.href} href={item.href} className={className}>
                {item.name}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={className}
                onClick={(event) => {
                  if (item.name === 'The Residence' && location === item.href) {
                    event.preventDefault();
                    window.history.replaceState(null, '', window.location.pathname + window.location.search);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
