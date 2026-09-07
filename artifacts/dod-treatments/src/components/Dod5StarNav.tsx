import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import dod5StarLogo from '../../../../attached_assets/5star_logo_1788800787470.png';

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
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-[#071421]/95 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" aria-hidden="true" />
      <div className="container relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.75rem] items-center justify-between lg:hidden">
          <Link href="/clinics/ixtapa-zihuatanejo" className="group flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-primary/45 bg-primary/10 p-2 shadow-[0_0_24px_rgba(244,190,69,0.1)] transition-colors group-hover:bg-primary/15">
              <img src={dod5StarLogo} alt="" className="h-full w-full object-contain" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold tracking-[0.16em] text-primary">DOD5STAR</span>
              <span className="block truncate text-[0.65rem] font-medium uppercase tracking-[0.14em] text-foreground/55">
                Healing &amp; Training Retreat
              </span>
            </span>
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-primary transition-colors hover:border-primary/35 hover:bg-primary/10"
            aria-expanded={isMenuOpen}
            aria-controls="dod5star-mobile-menu"
            aria-label={isMenuOpen ? 'Close retreat menu' : 'Open retreat menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>

          {isMenuOpen && (
            <nav
              id="dod5star-mobile-menu"
              className="absolute inset-x-4 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-primary/20 bg-[#0b1b2d]/[0.99] p-2 shadow-[0_26px_60px_rgba(0,0,0,0.48)]"
              aria-label="DOD5Star retreat"
            >
              {items.map((item) => {
                const isActive = isItemActive(item);
                const isPrimary = item.name === 'Plan Your Stay';
                const className = `my-0.5 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isPrimary
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : isActive
                      ? 'bg-primary/12 text-primary'
                      : 'text-foreground/75 hover:bg-white/5 hover:text-foreground'
                }`;

                return 'anchor' in item ? (
                  <a key={item.href} href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
                    <span>{item.name}</span>
                    {isPrimary && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
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
                      <span>{item.name}</span>
                      {isPrimary && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                  </Link>
                );
              })}
              <div className="mx-4 mt-2 border-t border-white/8 pt-3 pb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground/40">
                Currently viewing: <span className="text-foreground/65">{currentItem.name}</span>
              </div>
            </nav>
          )}
        </div>

        <div className="hidden min-h-[5.25rem] items-center lg:flex">
          <Link href="/clinics/ixtapa-zihuatanejo" className="group flex shrink-0 items-center gap-3 pr-7">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-primary/45 bg-primary/10 p-2 shadow-[0_0_24px_rgba(244,190,69,0.1)] transition-all group-hover:border-primary/70 group-hover:bg-primary/15">
              <img src={dod5StarLogo} alt="" className="h-full w-full object-contain" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold tracking-[0.18em] text-primary">DOD5STAR</span>
              <span className="mt-0.5 block text-[0.62rem] font-medium uppercase tracking-[0.15em] text-foreground/45">
                Ixtapa · México
              </span>
            </span>
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-1" aria-label="DOD5Star retreat">
            {items.filter((item) => item.name !== 'Plan Your Stay').map((item) => {
            const isActive = isItemActive(item);
            const className = `relative rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors after:absolute after:inset-x-3 after:-bottom-[1.34rem] after:h-px after:origin-center after:bg-primary after:transition-transform ${
              isActive
                ? 'text-primary after:scale-x-100'
                : 'text-foreground/65 after:scale-x-0 hover:bg-white/[0.035] hover:text-foreground'
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

          <Link
            href="/clinics/ixtapa-zihuatanejo/inquire"
            className="ml-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_8px_25px_rgba(244,190,69,0.16)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_30px_rgba(244,190,69,0.24)]"
          >
            Plan Your Stay
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
