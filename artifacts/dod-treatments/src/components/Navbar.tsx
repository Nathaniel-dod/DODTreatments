import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Treatments', href: '/treatments' },
  { name: 'Personal Treatments & Training', href: '/personal-treatment' },
  { name: 'Clinics', href: '/clinics' },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 min-h-20 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary/80 flex items-center justify-center shadow-lg">
              <span className="text-background font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold gold-gradient tracking-wide">DOCOFDETOX</div>
              <div className="text-xs text-muted-foreground -mt-1 tracking-[0.2em]">TREATMENTS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-y-1 flex-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  location === item.href || location.startsWith(item.href + '/')
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:1-855-900-4544" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden 2xl:inline whitespace-nowrap">1-855-900-4544</span>
            </a>
            <Link href="/treatments/consultations">
              <Button size="sm" className="gold-glow">Book Consultation</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/5">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    location === item.href || location.startsWith(item.href + '/')
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-white/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
              <a href="tel:1-855-900-4544" className="flex items-center gap-2 px-4 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                1-855-900-4544
              </a>
              <Link href="/treatments/consultations" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Book Consultation</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
