import { MapPin } from 'lucide-react';
import './Luxury.css';

const navItems = [
  { name: 'Overview', href: '/clinics/ixtapa-zihuatanejo' },
  { name: 'The Residence', href: '/clinics/ixtapa-zihuatanejo/residence' },
  { name: 'Treatments', href: '/clinics/ixtapa-zihuatanejo/treatments' },
  { name: 'Your Team', href: '/clinics/ixtapa-zihuatanejo/team' },
  { name: 'Plan Your Stay', href: '/clinics/ixtapa-zihuatanejo/inquire' },
];

function Dod5StarNav() {
  const activeHref = '/clinics/ixtapa-zihuatanejo';

  return (
    <div className="dod-luxury__nav">
      <nav className="dod-luxury__nav-inner" aria-label="DOD5Star retreat">
        <span className="dod-luxury__brand">DOD5Star</span>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => event.preventDefault()}
            className={`dod-luxury__link${item.href === activeHref ? ' dod-luxury__link--active' : ''}`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function Luxury() {
  return (
    <main className="dod-luxury">
      <Dod5StarNav />
      <section className="dod-luxury__hero">
        <img
          src="/__mockup/images/ixtapa-aerial.jpg"
          alt="Aerial view of Ixtapa-Zihuatanejo, México — jungle, marina, and Pacific coastline"
          className="dod-luxury__image"
        />
        <div className="dod-luxury__wash" aria-hidden="true" />
        <div className="dod-luxury__content">
          <div className="dod-luxury__main">
            <div className="dod-luxury__location">
              <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              <span>Ixtapa-Zihuatanejo, México</span>
            </div>
            <h1 className="dod-luxury__title">
              5-Star Healing <em>&amp; Training Retreat</em>
            </h1>
            <p className="dod-luxury__subtitle">
              A winning strategy for taking control of your healing
            </p>
            <p className="dod-luxury__attribution">
              Created by Dr. Darrell Wolfe — hosted by Master Practitioners Dr. Sage Wolfe &amp; Jesse Malcolm
            </p>
          </div>
          <div className="dod-luxury__aside" aria-hidden="true">
            <span className="dod-luxury__aside-mark" />
            <span className="dod-luxury__scroll" />
          </div>
        </div>
      </section>
    </main>
  );
}